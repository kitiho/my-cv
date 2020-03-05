<template>
  <div class="bg-grey aboutPage" style="">
    <div
      class="About d-flex flex-column ai-start w-100 jc-start py-5 px-4 text-white"
    >
      <div
        class="head fs-sm d-flex ai-center jc-between w-100"
        style="animation:title 0.8s ease"
      >
        <span style="font-weight:600">About me >></span
        ><span class="fs-xs fs-light">向右滑↓</span>
      </div>
      <div
        class="w-100 pt-1"
        style="animation:homepage-foot 0.8s ease;animation-delay: 1s;animation-fill-mode: forwards;visibility:hidden;"
      >
        <swiper :options="swiperOption">
          <swiper-slide
            :key="i"
            v-for="(keyword, i) in keywords"
            :class="`slide bg-${keyword.bgc} text-${keyword.fscolor}`"
          >
            <div class="d-flex flex-column ai-start jc-center fs-xs pl-1 pt-2">
              <i :class="`iconfont ${keyword.icon} fs-bold`"></i>
              <div class="">
                <span class="pr-1">0{{ i + 1 }}</span
                ><span class="fs-bold">{{ keyword.title }}</span>
              </div>
              <div class="fs-light">{{ keyword.body }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="title d-flex flex-column  pt-3 fs-sm">
        <span
          class="intro1"
          style="animation:homepage-foot 0.8s ease;animation-delay: 1.5s;animation-fill-mode: forwards;visibility:hidden;"
          >我叫段吉鹏。来自重庆。想要做一名前端工程师。</span
        >
        <span
          class="fs-xs fs-light intro1"
          style="animation:homepage-foot 0.8s ease;animation-delay: 2s;animation-fill-mode: forwards;visibility:hidden;"
          >My name is DuanJipeng. I'm from ChongQing,and I wanna be a front-end
          Engineer.</span
        ><span
          class="fs-xs fs-light"
          style="animation:homepage-foot 0.8s ease;animation-delay: 2.5s;animation-fill-mode: forwards;visibility:hidden;"
          >私は段吉鵬と申します。重慶に住んでいます。フロントエンドエンジニアになりたいです。</span
        >
      </div>
      <div class="body pt-4 fs-xs d-flex flex-column ai-center">
        <span
          class="fs-sm intro1"
          style="animation:homepage-foot 0.8s ease;animation-delay: 3s;animation-fill-mode: forwards;visibility:hidden;"
        >
          现在是一名大学生，正在寻求一份前端工程师的工作。如果有机会，我希望能让您更了解我。
        </span>
        <span
          class="fs-light pt-1 intro1"
          style="animation:homepage-foot 0.8s ease;animation-delay: 3.5s;animation-fill-mode: forwards;visibility:hidden;"
        >
          I‘m now a college student and looking for a job of front-end
          development.I believe that I will present more if you give me the
          chance.
        </span>
        <span
          class="fs-light pt-1 "
          style="animation:homepage-foot 0.8s ease;animation-delay: 4s;animation-fill-mode: forwards;visibility:hidden;"
        >
          私は今、大学生で、フロントエンドの仕事を探しています。もし機会があれば、私はこれ以上のこと、プレゼントできるのを信じています。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: [
        {
          title: "编程",
          bgc: "blue-2",
          body: "JavaScript",
          icon: "icon-webcodelanguageprogramwebdesigncompu"
        },
        {
          title: "足球",
          bgc: "purple",
          body: "梅西/巴萨",
          icon: "icon-SoccerBall"
        },
        {
          title: "日语",
          bgc: "yellow",
          fscolor: "black",
          body: "留学日本两年",
          icon: "icon-japan"
        },

        {
          title: "唱歌",
          bgc: "white-1",
          body: "林俊杰/JJ",
          fscolor: "black",
          icon: "icon-changge"
        },

        {
          title: "书法",
          bgc: "green",
          body: "硬笔书法",
          icon: "icon-shufaban"
        },
        {
          title: "美食",
          bgc: "purple",
          body: "家常菜",
          icon: "icon-meishi"
        }
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 320px) {
  .About {
    padding-top: 4rem;
  }
  .intro1 {
    padding-bottom: 0.5rem;
  }
}
.aboutPage {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.slide {
  width: 45%;
  height: 80px;
}

</style>