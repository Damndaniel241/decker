<script setup lang="ts"></script>

<template>

    <div id="" class="flex justify-center items-center flex-col">
  <h1 class="text-[#be4444] text-center ">
    hey there this is simply a link to all the other pages
  </h1>

  <div class="flex flex-col justify-center gap-1 border-red-500 rounded-md w-[80%] border items-center p-2">
    <RouterLink :to="{name:'InsureView'}" class=" mx-2 underline text-[#be4444]">insure-landing-page</RouterLink>
    <RouterLink :to="{name:'KryptaIndex'}" class=" mx-2 underline text-[#be4444]">krypta</RouterLink>
    <RouterLink :to="{name:'PasterIndex'}" class=" mx-2 underline text-[#be4444]">paster</RouterLink>
    <RouterLink :to="{name:'PuzzlerIndex'}" class=" mx-2 underline text-[#be4444]">puzzler</RouterLink>
    <!-- <RouterLink :to="{name:'InsureView'}" class="underline text-[#be4444]">insure-landing-page</RouterLink> -->
  </div>

</div>
</template>


<style>
#wrapper{
    display: flex;
    gap:5em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:70em;
    margin: 0 auto;
    border: 1px solid red;
    height: 100vh;
}
</style>