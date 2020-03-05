<template>
  <div class="h-100">
    <div class="work d-flex bg-grey flex-column ai-center jc-around">
      <swiper class="swiper w-100 flex-1 text-white" :options="swiperOption">
        <swiper-slide
          class="h-100 w-100"
          :style="`background-color:${work.bgc}`"
          v-for="(work, i) in works"
          :key="i"
        >
          <div class="d-flex flex-column jc-around w-100 h-100 ai-center">
            <div
              style="animation: title 1s ease;"
              class="w-100 d-flex pt-5 ai-center"
            >
              <span class="fs-xs px-4">0{{ i + 1 }}</span>
              <div class="d-flex w-100 h-100 flex-column jc-start ai-start">
                <span class="fs-lg fs-bold">{{ work.title }}</span>
                <p
                  style="display:block;animation: homepage-bg 1s ease;"
                  class="fs-xs title2 w-100"
                >
                  {{ work.desc }}
                </p>
              </div>
            </div>
            <div
              class=""
              style="box-shadow: 0px 12px 10px -9px rgba(0,0,0,0.75);animation: homepage-foot 1s ease;"
            >
              <img width="260" src="../assets/swipe111.png" alt="" />
            </div>
            <div
              class="d-flex flex-column ai-center jc-start fs-sm fs-light"
              style="animation: homepage-foot 1s ease;"
            >
              <span
                class="pt-1 fs-xs"
                v-for="(tech, index) in work.techs"
                :key="index"
                >{{ index + 1 }}. {{ tech }}</span
              >
            </div>
            <div
              class="text-white pb-3 changePage fs-sm fs-bold d-flex w-100 jc-around ai-center"
            >
              <div class="cursor" style="animation: homepage-foot 1s ease;">
                Prev
              </div>
              <div class="cursor" style="animation: homepage-foot 1s ease;">
                Next
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div
      class="seeProject bg-white w-100 d-flex ai-center jc-around"
      style="animation:opacityShow 1s ease"
    >
      <span class="fs-sm fs-bold">SEE PROJECT</span>
      <div class="">
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
          bgc: "#111111",
          techs: [
            "使用NodeJS的Express框架搭建后台服务器",
            "使用了MongoDB做数据库",
            "使用了Vue的ElementUI框架做后台管理"
          ]
        },
        {
          title: "口袋妖怪查询APP",
          desc: "Vue + Axios + LazyLoad",
          bgc: "#060b16",
          techs: [
            "使用Vue+Flex布局成应用界面",
            "使用了Axios并单独封装成http以方便使用",
            "使用了PokemonAPI并阅读文档使用",
            "使用IntersectionObserver做获取数据时懒加载"
          ]
        },
        {
          title: "倒计时页面",
          desc: "HTML + CSS + JavaScript",
          bgc:"#022567",
          techs: [
            "使用HTML+Flex布局",
            "使用CSS的媒体查询做了四层响应式布局",
            "使用了npm-scss将scss转成css以便使用",
            "使用原生JavaScript获取时间并设置倒计时"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.work {
  position: relative;
  height: 90%;
  overflow: hidden;
}
.seeProject {
  position: absolute;
  height: 10%;
  bottom: 0%;
  left: 0;
  z-index: 1;
}
.swiper {
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