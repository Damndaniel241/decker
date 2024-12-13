<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const getContent = ref<String>("");
const getTitle = ref<String>("");
const quillEditor = ref(null); // Reference to the Quill editor
const formattedContent = ref<String>("");
const clipboardTextLink = ref("copy url link");
const clipboardTextCode = ref("copy code");

async function getBucket() {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/app/getbucket/${route.params.url_id}/`
    );
    getContent.value = response.data.content;
    getTitle.value = response.data.title;
    quillEditor.value?.setHTML(getContent.value);
    formattedContent.value = getContent.value;
  } catch (error) {
    console.error("error retreiving content", error);
  }
}

function copyCodeToClipBoard(){
  if(formattedContent.value){
    navigator.clipboard.writeText(formattedContent.value);
    clipboardTextCode.value = "copied"
  }
}
function copyLinkToClipBoard(){

    navigator.clipboard.writeText(`http://localhost:5173/paster/${route.params.url_id}`);
    clipboardTextLink.value = "copied"

}



getBucket();
</script>

<template>
  <div class="mx-auto md:w-[80%] w-[95%] mt-3 flex-col flex gap-5">
    <div class="flex justify-between w-full">
      <p class="text-lg text-[#333333]">{{ getTitle }}</p>
      <div class="flex gap-1 text-sm">
      <span class="flex gap-1 items-center cursor-pointer hover:bg-gray-400 " @click="copyLinkToClipBoard"><span>{{ clipboardTextLink }}</span><i class="pi pi-clipboard"></i></span>
      <RouterLink :to="{name:'PasterIndex'}" class="bg-green-500 p-1 text-white flex gap-1 items-center"
        >new paste<i class="pi pi-plus"></i
      ></RouterLink>
    </div>
    </div>
    <div class="border-black border w-full p-2">
      <div v-html="formattedContent"></div>
    </div>
    <div class="flex justify-end mb-3">
      <span class="flex gap-1 items-center cursor-pointer hover:bg-gray-400 text-sm" @click="copyCodeToClipBoard"><span>{{ clipboardTextCode }}</span><i class="pi pi-clipboard"></i></span>
    </div>
  </div>
</template>
