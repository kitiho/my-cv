<template>
  <div class="work d-flex ai-center jc-center">
    <swiper class="w-100" :options="swiperOption">
      <swiper-slide
        ><img class="w-100" src="../assets/swipe1.svg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/swipe1.svg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/swipe1.svg" alt=""
      /></swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-white"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>