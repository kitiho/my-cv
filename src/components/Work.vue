<template>
  <div class="work h-100">
    <swiper class="swiper w-100 text-white" :options="swiperOption">
      <swiper-slide
        class="h-100"
        :style="work.bgc"
        v-for="(work, i) in works"
        :key="i"
      >
        <div class="d-flex flex-column pt-5 h-100 ai-center">
          <div
            style="animation: title 1s ease;"
            class="w-100 pt-5 mt-4 d-flex ai-center"
          >
            <span class="fs-xs px-4">0{{ i + 1 }}</span>
            <span class="fs-lg fs-bold">{{ work.title }}</span>
          </div>
          <p
            style="animation: homepage-bg 1s ease;"
            class="fs-xs title2 pl-5 ml-4  w-100"
          >
            {{ work.desc }}
          </p>
          <div
            class="pt-4"
            style="box-shadow: 0px 12px 10px -9px rgba(0,0,0,0.75);animation: homepage-foot 1s ease;"
          >
            <img width="300" src="../assets/swipe111.png" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div
      class="text-white pt-4 mt-3 changePage fs-sm fs-bold d-flex w-100 jc-around ai-center"
    >
      <div class="cursor" style="animation: homepage-foot 1s ease;">Prev</div>
      <div class="cursor" style="animation: homepage-foot 1s ease;">Next</div>
    </div>
    <div
      class="d-flex ai-center jc-around pt-4"
      style="animation:opacityShow 1s ease"
    >
      <span class="pt-1 fs-sm fs-bold">SEE PROJECT</span>
      <div class="pt-1">
        <div
          class="ml-4 arrow seeProjectArrow bg-blue d-flex ai-center jc-center"
        >
          <img
            class="circle"
            width="18"
            src="../assets/rightArrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: "fade"
      },
      works: [
        {
          title: "仿王者荣耀官网",
          desc: "Vue + ElementUI + Express",
          bgc:
            "background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);"
        },
        {
          title: "口袋妖怪查询APP",
          desc: "Vue + Axios + LazyLoad",
          bgc:
            "background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);"
        },
        {
          title: "倒计时页面",
          desc: "HTML + CSS + JavaScript"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.changePage {
  position: absolute;
  bottom: 180px;
  z-index: 1;
  right: 50%;
  transform: translateX(50%);
}
.swiper {
  height: 80%;
}
.seeProjectArrow {
  width: 2.8rem;
  height: 2.8rem;
  animation: move 1s infinite ease;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(5px);
  }
  90% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>