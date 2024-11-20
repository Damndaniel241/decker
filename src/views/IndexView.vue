<script setup lang="ts"></script>

<template>

    <div id="wrapper">
  <h1 class="text-[#be4444] w-[50%] text-center">
    hey there this is simply a link to all the other pages
  </h1>

  <div class="flex flex-col gap-1 border-red-500 rounded-md border w-[40%] items-center">
    <RouterLink :to="{name:'InsureView'}" class="underline text-[#be4444]">insure-landing-page</RouterLink>
    <!-- <RouterLink :to="{name:'InsureView'}" class="underline text-[#be4444]">insure-landing-page</RouterLink> -->
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