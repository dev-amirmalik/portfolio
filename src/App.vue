<script setup lang="ts">
import { RouterView } from "vue-router";
const year = new Date().getFullYear();
</script>

<template>
  <div class="w-full">
    <RouterView />
    <div
      class="w-ful px-4 py-4 md:py-2 bg-app-primary md:text-right gap-4 flex text-center md:justify-between md:flex-row flex-col"
    >
      <div class="flex gap-2 md:flex-row flex-col justify-center">
        <p class="flex gap-2 items-center hover:text-yellow-600">
          <i class="fab fa-linkedin"></i>
          <a
            class="hover:text-inherit"
            href="https://www.linkedin.com/in/amirmalikse/"
            >LinkedIn</a
          >
        </p>
        <p class="flex gap-2 items-center hover:text-yellow-600">
          <i class="fa fa-envelope"></i>
          <a class="hover:text-inherit" href="mailto:dev.amirmalik@gmail.com"
            >dev.amirmalik@gmail.com</a
          >
        </p>
      </div>
      <p>&copy; {{ year }}</p>
    </div>
  </div>
</template>
