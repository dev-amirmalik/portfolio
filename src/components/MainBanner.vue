<template>
  <div class="bg-app-primary">
    <section class="p-4 h-screen flex flex-col justify-between">
      <div
        class="flex flex-col md:flex-row w-full justify-between gap-20 md:gap-0"
      >
        <div>
          <h1
            class="text-[40px] md:text-[60px] font-bold uppercase leading-[0.8] text-center md:text-left"
          >
            software<br />developer
          </h1>
          <p class="text-center md:text-right">Senior Software Developer</p>
        </div>
        <figure
          class="h-[200px] w-[200px] md:h-[300px] md:w-[300px] md:w-auto rounded-full md:rounded-none overflow-hidden m-auto md:m-0"
        >
          <img
            src="/assets/img/photo-amir.jpg"
            class="w-full h-full md:object-contain object-cover"
            alt="photo developer"
          />
        </figure>
      </div>
      <div
        class="flex flex-col-reverse gap-6 md:flex-row w-full justify-between items-center md:items-end home-view__action"
      >
        <div class="flex flex-col more--details" @click="goToScroll">
          <o-icon class="bounce" pack="fa" icon="arrow-down"></o-icon
          ><span>More Details</span>
        </div>
        <div>
          <p class="text-center md:text-right">Frontend Developer</p>
          <h1
            class="text-[48px] md:text-[64px] font-bold uppercase leading-[0.8] text-center md:text-right"
          >
            Amir<br />Malik
          </h1>
        </div>
      </div>
    </section>
  </div>
  <div id="goToScroll"></div>
</template>
<script lang="ts" setup>
function goToScroll() {
  const section = document.getElementById(`goToScroll`);
  const sectionTop = section ? section.offsetTop : "";
  if (sectionTop) {
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}
</script>

<style lang="scss">
.bounce {
  animation: bounce 2s ease infinite;
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
