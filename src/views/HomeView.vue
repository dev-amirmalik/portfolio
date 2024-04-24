<script setup lang="ts"></script>

<template>
  <div class="bg-gray-300">
    <section class="p-4 h-screen flex flex-col justify-between">
      <div class="flex w-full justify-between">
        <div>
          <h1 class="text-[60px] font-bold uppercase leading-[0.8]">
            software<br />developer
          </h1>
          <p class="text-right">Senior Software Developer</p>
        </div>
        <figure class="h-[300px]">
          <img
            src="/assets/img/photo-amir.jpg"
            class="w-full h-full object-contain"
            alt="photo developer"
          />
        </figure>
      </div>
      <div class="flex w-full justify-between items-end home-view__action">
        <div class="flex flex-col more--details">
          <o-icon pack="fa" icon="arrow-down"></o-icon><span>More Details</span>
        </div>
        <div>
          <p class="text-right">Frontend Developer</p>
          <h1 class="text-[64px] font-bold uppercase leading-[0.8] text-right">
            Amir<br />Malik
          </h1>
        </div>
      </div>
    </section>
  </div>
  <section class="px-4 py-10">
    <div class="flex gap-6 justify-between items-center">
      <figure class="w-[200px] h-[200px] rounded-full overflow-hidden">
        <img
          class="w-full h-full object-cover"
          src="/assets/img/photo-amir-2.jpg"
          alt="photo amir about"
        />
      </figure>
      <p class="w-[50%] text-justify text-xl">
        Experienced Frontend Developer with a demonstrated history of working in
        the information technology and services industry. Skilled in Vue.js,
        javascript, PHP, Web Design, and HTML. Strong engineering professional
        with a Bachelor's degree focused in Information Technology.
      </p>
      <div class="h-full flex items-start">
        <p class="text-orange-400 font-bold uppercase">About</p>
      </div>
    </div>
  </section>
  <section class="px-4 py-10 text-center flex flex-col gap-10">
    <h2 class="text-[40px] font-bold uppercase">Main Skills</h2>
    <div class="flex gap-20 w-full justify-center">
      <o-icon class="text-[80px]" pack="fab" icon="vuejs"></o-icon>
      <o-icon class="text-[80px]" pack="fab" icon="html5"></o-icon>
      <o-icon class="text-[80px]" pack="fab" icon="css3-alt"></o-icon>
      <o-icon class="text-[80px]" pack="fab" icon="js"></o-icon>
    </div>
    <div>
      <h2 class="font-bold">Other Skills</h2>
      <p>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          >Typescript</a
        >
        ,
        <a
          href="https://micro-frontends.org/"
          target="_blank"
          rel="noopener noreferrer"
          >Micro-frontend</a
        >,
        <a
          href="https://miragejs.com/"
          target="_blank"
          rel="noopener noreferrer"
          >Backendless Prototype</a
        >,
        <a
          href="https://en.wikipedia.org/wiki/Leadership"
          target="_blank"
          rel="noopener noreferrer"
          >Leadership</a
        >,
        <a
          href="https://en.wikipedia.org/wiki/Unit_testing"
          target="_blank"
          rel="noopener noreferrer"
          >Unit Test</a
        >, and many
        <a
          href="https://www.linkedin.com/pulse/top-10-skills-frontend-developer-must-have-2023"
          target="_blank"
          rel="noopener noreferrer"
          >frontend skills</a
        >
      </p>
    </div>
  </section>
  <div class="bg-gray-900">
    <section class="px-4 py-10 text-center flex flex-col gap-10 text-white">
      <h2 class="text-[40px] uppercase">Portofolio</h2>
    </section>
  </div>
</template>

<style lang="scss">
.home-view {
  &__action {
    .more--details {
      @apply cursor-pointer;
    }
  }
}
</style>
