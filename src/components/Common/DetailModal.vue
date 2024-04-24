<template>
  <div class="p-4 w-full flex flex-col gap-4 pb-8 md:min-w-[900px]">
    <div class="flex justify-between gap-4">
      <div>
        <h1 class="text-2xl">
          <b>{{ title }}</b>
        </h1>
        <p>{{ yearOfProject }} - {{ projectType }}</p>
      </div>
      <o-button @click="closeModal"
        ><o-icon
          class="text-black flex items-center"
          size="medium"
          icon="xmark"
          pack="fa"
        ></o-icon
      ></o-button>
    </div>
    <o-carousel iconPack="fa">
      <o-carousel-item v-for="(carousel, i) in images" :key="i">
        <figure class="carousel__image-wrapper">
          <img :src="carousel" alt="" />
        </figure>
      </o-carousel-item>
    </o-carousel>
    <div>
      <b>Description</b>
      <p>{{ description }}</p>
    </div>
    <div>
      <b>Role</b>
      <p>{{ projectRole }}</p>
    </div>
    <div>
      <b>Tech</b>
      <p>{{ tech }}</p>
    </div>
  </div>
  <div class="text-center p-5">
    <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer"
      ><o-button variant="primary" class="bg-yellow-600"
        >Open Website</o-button
      ></a
    >
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  images: {
    type: Array<string>,
    default: () => [],
  },
  description: {
    type: String,
  },
  tech: {
    type: String,
  },
  projectRole: {
    type: String,
  },
  date: {
    type: String,
  },
  projectType: {
    type: String,
  },
  url: {
    type: String,
  },
});

const yearOfProject = computed(() => {
  return props.date ? new Date(props.date).getFullYear() : "2015";
});

const emits = defineEmits(["close"]);
function closeModal() {
  emits("close");
}
</script>

<style lang="scss">
.carousel {
  &__image-wrapper {
    height: 400px;
    img {
      @apply w-full h-full;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
