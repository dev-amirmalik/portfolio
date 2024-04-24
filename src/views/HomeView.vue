<template>
  <MainBanner></MainBanner>
  <MainDescription></MainDescription>
  <MainSkills></MainSkills>
  <DeveloperPortfolio></DeveloperPortfolio>
</template>

<script setup lang="ts">
import MainBanner from "@/components/MainBanner.vue";
import MainDescription from "@/components/MainDescription.vue";
import MainSkills from "@/components/MainSkills.vue";
import DeveloperPortfolio from "@/components/DeveloperPortfolio.vue";
</script>

<style lang="scss">
.home-view {
  &__action {
    .more--details {
      @apply cursor-pointer;
    }
  }
}
</style>
