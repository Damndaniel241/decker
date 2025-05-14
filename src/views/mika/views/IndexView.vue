<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { validateUrl } from "@the-node-forge/url-validator";
import { HollowDotsSpinner } from "epic-spinners";
import { SpringSpinner } from 'epic-spinners';



const long_url = ref<string>("");
const url_data = ref({});
const short_code = ref<string>("");
const short_url = ref<string>("");
const is_invalid = ref<boolean>(false);
const clipboardTextLink = ref("copy url link");
const isLoading = ref<boolean>(false);
const isCopied = ref<boolean>(false);


async function createUrl() {
  if (!validateUrl(long_url.value)) {
    console.log("invalid url");
    is_invalid.value = true;
    setTimeout(() => {
      is_invalid.value = false;
    }, 5000);

    return;
  }
  isLoading.value = true;
  const formData = {
    original_url: long_url.value,
  };

  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/mika/create-url/",
      formData
    );
    isLoading.value = false;

    url_data.value = response.data;
    // console.log("url data ooo = ",url_data.value);
    console.log("short code ooo = ", response.data.data[0]);
    // if (response.data.length > 0) {
    short_code.value = response.data.data[0].short_code;
    // }
    // if (short_code.value) {
    short_url.value = `http://127.0.0.1:8000/mika/${short_code.value}`;
    console.log(url_data.value);
    // }
  } catch (error) {
    console.error("error creating url", error);
  }
}

function copyLinkToClipBoard() {
  navigator.clipboard.writeText(short_url.value);
  // clipboardTextLink.value = "copied!";
  isCopied.value = true;
}
</script>

<template>
  <div class="bg-[#031F39] h-screen flex flex-col justify-center items-center">
    <div
      class="bg-white text-[#031F39] md:w-[80%] w-[95%] mx-auto rounded-[2em] p-[2em] flex flex-col gap-[3em]"
    >
      <div class="flex flex-col gap-[1.5em]">
        <h1 class="text-[2em] font-bold">Shorten a long link</h1>
        <h1 class="text-lg">no credit card required</h1>
      </div>
      <div class="flex flex-col mx-auto gap-[1em] w-full">
        <label>paste your long link here:</label>
        <div class="border border-black focus:outline-none">
          <input
            class="p-[1em] w-full placeholder:text-gray-400 text-[#031F39]"
            placeholder="https://www.nairaland.com"
            v-model="long_url"
          />
        </div>
        <label v-if="is_invalid" class="text-red-500 text-[1em] m-0"
          >invalid url</label
        >
      </div>

      <button
        @click="createUrl"
        class="bg-[#0058DD] hover:bg-[#031F39] w-full md:w-[30%] rounded-[1em] cursor-pointer flex gap-2 btn items-center justify-center"
      >
      <div v-if="isLoading">
        <spring-spinner
    :animation-duration="3000"
    :size="30"
    color="#ff1d5e"
  />
      </div>
        <span>Get your link for free</span>
      </button>

      <div v-if="short_url" class="flex gap-[1em] border-gray-600 border place-self-start border-3 p-2">
        <div>{{ short_url }}</div>
        <span
          class="flex gap-1 items-center cursor-pointer"
          @click="copyLinkToClipBoard"
          ><i :class="[isCopied?'pi pi-check' :'pi pi-clipboard']"></i
        ></span>
      </div>
    </div>
  </div>
</template>
