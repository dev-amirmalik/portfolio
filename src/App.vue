<script setup lang="ts">
import { RouterView } from "vue-router";
const year = new Date().getFullYear();
</script>

<template>
  <div class="w-full">
    <RouterView />
    <div class="w-ful px-4 py-2 bg-blue-950 text-white text-right">
      &copy; {{ year }}
    </div>
  </div>
</template>
