<script setup lang="ts">
import { ref } from "vue";
import logo from "./images/logo.svg";
import IconHamburger from "./images/icon-hamburger.svg";
import IconClose from "./images/icon-close.svg";
import BgPatternMobileNav from "./images/bg-pattern-mobile-nav.svg";
import HeroImageMobile from "./images/image-intro-mobile.jpg";
import BgPatternIntroRightMobile from "./images/bg-pattern-intro-right-mobile.svg";
import BgPatternIntroLeftMobile from "./images/bg-pattern-intro-left-mobile.svg";
import IconSnappyProcess from "./images/icon-snappy-process.svg";
import IconPeopleFirst from "./images/icon-people-first.svg";
import IconAffordablePrices from "./images/icon-affordable-prices.svg";
import BgPatternWorkMobile from "./images/bg-pattern-how-we-work-mobile.svg";
import BgPatternFooterMobile from "./images/bg-pattern-footer-mobile.svg";
import IconFacebook from "./images/icon-facebook.svg";
import IconInstagram from "./images/icon-instagram.svg";
import IconPinterest from "./images/icon-pinterest.svg";
import IconTwitter from "./images/icon-twitter.svg";

const hamburgerBtnClicked = ref(false);
function clickMenu() {
  hamburgerBtnClicked.value = !hamburgerBtnClicked.value;
}
</script>
<template>
  <nav class="flex justify-between bg-[#fafafa] p-4 items-center">
    <img :src="logo" alt="insure logo" class="" />
    <img
      @click="clickMenu"
      :src="hamburgerBtnClicked ? IconClose : IconHamburger"
      alt="icon hamburger"
      class="cursor-pointer"
    />
  </nav>

  <div v-if="hamburgerBtnClicked" id="mobile-menu" class="bg-[#2b272f]">
    <div
      class="flex flex-col justify-between gap-4 text-[#fafafa] tracking-wider text-xl uppercase karla-family"
    >
      <div class="p-3 mx-5 mt-5 text-center hover:border-2">How we work</div>
      <div class="p-3 mx-5 text-center hover:border-2">Blog</div>
      <div class="p-3 mx-5 text-center hover:border-2">Account</div>
      <div class="p-3 mx-5 text-center hover:border-2">View plans</div>

      <img
        :src="BgPatternMobileNav"
        alt="bg-pattern-mobile-nav"
        class="flex-1"
      />
    </div>
  </div>

  <section id="hero-image">
    <img :src="HeroImageMobile" alt="hero image mobile" class="w-full" />
  </section>

  <section
    id="humanizing-your-insurance"
    class="bg-[#2d2640] relative flex justify-center items-center h-[70%] overflow-y-visible"
  >
    <img
      :src="BgPatternIntroLeftMobile"
      alt="bg-pattern-intro-left-mobile"
      class="absolute top-px left-px"
    />
    <img
      :src="BgPatternIntroRightMobile"
      alt="bg-pattern-intro-right-mobile"
      class="absolute top-[300px] right-px"
    />
    <div class="text-[#fafafa] flex-col gap-4 flex mx-5 text-center">
      <h1 class="dm-serif-display-regular text-5xl">
        Humanizing your insurance.
      </h1>
      <p class="leading-8 text-[#fafafa] ">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that’s right for you.
        Ensure you and your loved ones are protected.
      </p>
      <div
        class=" hover:bg-[#fafafa] hover:text-[#2d2640] cursor-pointer border-2 py-2 font-mono px-5 uppercase text-center font-bold w-fit text-base mx-auto tracking-widest"
      >
        View plans
      </div>
    </div>
  </section>

  <Section class="h-[20%]" />

  <section id="were-different" class="">
    <div class="flex-col flex gap-5 items-center">
      <div class="border-t w-[40%] border-t-[#837d87]" />
      <h1 class="text-5xl dm-serif-display-regular my-4 text-[#2b272f]">
        We’re different
      </h1>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-9 items-center pt-[4em]">
        <img :src="IconSnappyProcess" alt="" class="w-30" />
        <p class="text-3xl dm-serif-display-regular text-[#2b272f]">
          Snappy Process
        </p>
        <p class="text-[#837d87] text-center text-lg w-[90%]">
          Our application process can be completed in minutes, not hours. Don’t
          get stuck filling in tedious forms.
        </p>
      </div>
      <div class="flex flex-col space-y-9 items-center pt-[4em]">
        <img :src="IconAffordablePrices" alt="" class="w-30" />
        <p class="text-3xl dm-serif-display-regular text-[#2b272f]">
          Affordable Prices
        </p>
        <p class="text-[#837d87] text-center text-lg w-[90%]">
          We don’t want you worrying about high monthly costs. Our prices may be
          low, but we still offer the best coverage possible.
        </p>
      </div>
      <div class="flex flex-col space-y-9 items-center pt-[4em]">
        <img :src="IconPeopleFirst" alt="" class="w-30" />
        <p class="text-3xl dm-serif-display-regular text-[#2b272f]">
          People First
        </p>
        <p class="text-[#837d87] text-center text-lg w-[90%]">
          Our plans aren’t full of conditions and clauses to prevent payouts. We
          make sure you’re covered when you need it.
        </p>
      </div>
    </div>
  </section>

  <section id="how-we-work" class="flex justify-center items-center h-[90%]">
    <div
      class="bg-[#2d2640] relative text-[#fafafa] w-[90%] flex-col flex px-[2em] py-[5em] space-y-8 items-center"
    >
      <img :src="BgPatternWorkMobile" alt="" class="absolute top-px right-px" />

      <h1 class="dm-serif-display-regular text-5xl h-[70%] text-center">
        Find out more about how we work
      </h1>

      <div
        class=" hover:bg-[#fafafa] hover:text-[#2d2640] font-mono font-bold text-base border-2 py-2 px-5 uppercase text-center w-fit mx-auto tracking-widest"
      >
        how we work
      </div>
    </div>
  </section>

  <footer class="bg-[#fafafa] relative">
    <img :src="BgPatternFooterMobile" alt="" class="top-px absolute w-full" />
    <section
      id="social-media"
      class="flex flex-col justify-center items-center gap-[2em] p-[5em]"
    >
      <img :src="logo" alt="insure logo" class="" />

      <div class="flex gap-3">
        <img :src="IconFacebook" alt="" class="hover:text-[#2d2640] cursor-pointer" >
        <img :src="IconTwitter" alt="" class="" />
        <img :src="IconPinterest" alt="" class="" />
        <img :src="IconInstagram" alt="" class="" />
      </div>
      <div class="border-t w-full border-t-[#837d87]" />
    </section>

    <section id="info" class="uppercase flex flex-col items-center">
      <div
        class="flex flex-col gap-[1.5em] items-center font-mono font-bold text-lg tracking-wider mb-[3em]"
      >
        <p class="text-[#837d87]">Our company</p>
        <div class="flex flex-col items-center text-lg text-[#2d2640]">
          <p>How we work</p>
          <p>Why Insure?</p>
          <p>check price</p>
          <p>reviews</p>
        </div>
      </div>
      <div
        class="flex flex-col gap-[1.5em] items-center font-mono font-bold text-lg tracking-wider mb-[3em]"
      >
        <p class="text-[#837d87] ">help me</p>
        <div class="flex flex-col items-center text-lg text-[#2d2640]">
          <p>faq</p>
          <p>terms of use</p>
          <p>privacy policy</p>
          <p>cookies</p>
        </div>
      </div>
      <div
        class="flex flex-col gap-[1.5em] items-center font-mono font-bold text-lg tracking-wider mb-[3em]"
      >
        <p class="text-[#837d87]">contact</p>
        <div class="flex flex-col items-center text-lg text-[#2d2640]">
          <p>sales</p>
          <p>support</p>
          <p>live chat</p>
        </div>
      </div>
      <div
        class="flex flex-col gap-[1.5em] items-center font-mono font-bold text-lg tracking-wider mb-[3em]"
      >
        <p class="text-[#837d87]">Others</p>
        <div class="flex flex-col items-center text-lg text-[#2d2640]">
          <p>careers</p>
          <p>press</p>
          <p>licenses</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Karla:ital,wght@0,200..800;1,200..800&family=Syne:wght@400..800&display=swap");

@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=Karla:ital,wght@0,200..800;1,200..800&family=Syne:wght@400..800&display=swap");
:root {
  --Dark-Violet: #2d2640;
  --Grayish-Blue: #95a9c6;
  --Very-Dark-Violet: #2b272f;
  --Dark-Grayish-Violet: #837d87;
  --Very-Light-Gray: #fafafa;
}

.karla-family {
  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

.dm-serif-display-regular {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-style: normal;
}

.dm-serif-display-regular-italic {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-style: italic;
}
</style>
