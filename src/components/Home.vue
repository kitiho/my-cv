<template>
  <div class="homepage text-white p-5  d-flex flex-column jc-around bg-blue">
    <div class="homepage-title" style="animation:title 1.5s ease">
      <span class="fs-lg fs-bold">Welcome </span>
      <span class="fs-lg fs-bold">to my </span>
      <span class="fs-lg fs-bold">Small Base</span>
    </div>
    <div
      class="homepage-body fs-xs fs-light d-flex"
      style="animation:homepage-body 1s ease"
    >
      <transition name="sentence" mode="out-in">
        <span :key="index" class="pt-4">
          {{ sentences[index] }}
        </span>
      </transition>
    </div>
    <div
      class="homepage-foot d-flex ai-center"
      style="animation:homepage-foot 1s ease"
    >
      <span class="fs-sm fs-bold">SEE WORKS</span>
      <div
        class="homepage-arrow  ml-4 arrow bg-blue d-flex ai-center jc-center bg-white"
      >
        <img width="20" src="../assets/arrow-blue.png" alt="" />
      </div>
    </div>
    <div class="homepage-bg" style="overflow:hidden">
      <img
        src="../assets/homepage.svg"
        width="210"
        class="h-100"
        style="animation:homepage-bg 1.3s ease;"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      sentenceActiveID: 0,
      sentences: [
        "第一次看到宇宙，是和你四目相对的时候。",
        "「今でもあなたは私の光。」",
        "热爱可抵岁月漫长。",
        "就算你和我，还有整个愚蠢的世界，都将变成粉碎，我依然爱你。",
        "行至朝雾里，坠入暮云间。"
      ]
    };
  },
  methods: {
    refreshIndex() {
      if (this.index + 1 == this.sentences.length) {
        this.index = 0;
      } else {
        this.index = this.index + 1;
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.refreshIndex();
    }, 5000);
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/style.scss";
.homepage {
  .homepage-bg {
    position: absolute;
    top: 130px;
    right: 0px;
    z-index: 0;
  }
  min-height: 100vh;
  .homepage-title {
    position: relative;
    width: 9rem;
    line-height: 2rem;
    z-index: 1;
  }
  .homepage-body {
    height: 70px;
    position: relative;
    width: 9rem;
    line-height: 1.3rem;
    z-index: 1;
  }
  .homepage-foot {
    .homepage-arrow {
      img {
        animation: move 2s infinite ease;
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
    }
  }
}
</style>