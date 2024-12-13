<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const title = ref<String>("");
const content = ref<String>("");
const linkData = ref({});
const router = useRouter();


async function createLink(){
    const formData = {
        title:title.value,
        content:content.value
    }

    try{
        const response = await axios.post("http://127.0.0.1:8000/app/postbucket",formData);
        linkData.value=response.data;
        console.log(linkData.value);
        router.push({name:"PasteDisplay",params:{url_id:response.data.url_id}});
        
    }catch(error){
        console.error("error creating link",error);
        
    }
}
</script>

<template>
  <p class="text-lg text-[#333333] mx-auto md:w-[80%] w-[95%]">new paste</p>
  <div class="flex flex-col gap-4">
  <div class="border border-black mt-1 mx-auto md:w-[80%] w-[95%]">
    <QuillEditor theme="bubble" v-model:content="content" contentType="html" />
  </div>
  <div class="flex mx-auto md:w-[80%] w-[95%] gap-[1em]">
    <label>paste name / title :</label
    ><input class="border border-black focus:outline-none" v-model="title" />
  </div>
  <div class="mx-auto md:w-[80%] w-[95%]">
    <button
      class="bg-green-500 p-1 px-2 cursor-pointer rounded-md text-white mx-auto active:bg-green-700 ..."
        @click="createLink"
      >
      create new paste
    </button>
  </div>
</div>
</template>
