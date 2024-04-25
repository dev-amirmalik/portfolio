<template>
  <section class="bg-white content">
    <section class="px-4 py-10 text-center flex flex-col gap-10 text-black">
      <h2 class="text-[40px] uppercase">Portfolio</h2>
    </section>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div
        class="card__wrapper"
        v-for="(item, index) in PORTFOLIO_LIST"
        :key="index"
        @click="showDetail(item)"
      >
        <figure class="card__portfolio-image-wrapper">
          <img :src="assetsPath + item.mainImageUrl" :alt="item.title" />
        </figure>
        <div class="p-2 flex flex-col gap-2">
          <h2 class="text-lg">
            <b>{{ item.title }}</b>
          </h2>
          <p class="card__small-description">{{ item.shortDescription }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PORTFOLIO_LIST, type PortfolioData } from "@/helpers/PortfolioList";
import DetailModal from "./Common/DetailModal.vue";
import { useProgrammatic } from "@oruga-ui/oruga-next";
const { oruga } = useProgrammatic();

const assetsPath =
  import.meta.env.MODE === "production" ? (window as any).portfolio.prefix : "";
function showDetail(item: PortfolioData) {
  let tech = item.tech;
  if (Array.isArray(item.tech)) {
    tech = item.tech.join(", ");
  }

  oruga.modal.open({
    component: DetailModal,
    props: {
      ...item,
      description: item.mainDescription,
      tech: tech,
    },
    trapFocus: true,
    destroyOnHide: false,
  });
}
</script>

<style lang="scss">
.card {
  &__wrapper {
    cursor: pointer;
    transition: 0.2s;
    // height: 300px;
    @apply flex flex-col gap-2;
    figure {
      height: 200px;
      width: 100%;
      overflow: hidden;
      img {
        transition: 0.2s;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h2 {
      @apply md:text-inherit text-orange-600;
    }

    &:hover {
      transition: 0.2s;
      @apply shadow-2xl;
      h2 {
        @apply text-orange-600;
      }
      figure {
        img {
          transform: scale(1.2);
          filter: none;
        }
      }
    }
  }
  &__small-description {
    height: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__portfolio-image-wrapper {
    img {
      @apply md:grayscale;
    }
  }
}
</style>
