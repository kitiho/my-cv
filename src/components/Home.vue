<template>
  <div class="home bg-blue w-100">
    <Toggle-button class="toggle cursor" @toggleNav="toggleNav" />
    <div class="homepage text-white p-5 d-flex flex-column jc-around ">
      <div class="homepage-title">
        <span class="fs-lg fs-bold">Welcome to my Small Base</span>
      </div>
      <div class="homepage-body fs-xs fs-light">
        <span>{{ sentences[0] }}</span>
      </div>
      <div class="homepage-foot d-flex ai-center">
        <span class="fs-sm fs-bold">SEE WORKS</span>
        <div
          class="homepage-arrow  ml-4 arrow bg-blue d-flex ai-center jc-center bg-white"
        >
          <img width="20" src="../assets/arrow-blue.png" alt="" />
        </div>
      </div>
      <div class="homepage-bg">
        <img src="../assets/homepage.svg" width="210" alt="" />
      </div>
    </div>

    <transition name="Nav">
      <Nav @closeNav="showNav = false" v-show="showNav" class="nav w-100" />
    </transition>
  </div>
</template>

<script>
import Nav from "./Nav";
import ToggleButton from "./ToggleButton";
export default {
  components: {
    Nav,
    ToggleButton
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    }
  },
  data() {
    return {
      showNav: false,
      sentences: [
        "To dream the impossible dream.To fight the unbeatable foe.To bear with unbearable sorrow.To run where the brave dare not go."
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.toggle {
  width: 70px;
  height:60px;
  position: absolute;
  top: -20px;
  z-index: 999;
}
.nav {
  position: absolute;
  top: 0;
  z-index: 100;
}
.homepage {
  .homepage-bg {
    position: absolute;
    top: 130px;
    right: 0px;
    z-index: 1;
  }
  min-height: 100vh;
  .homepage-title {
    position: relative;
    z-index: 2;
    width: 9rem;
    line-height: 2rem;
  }
  .homepage-body {
    position: relative;
    z-index: 2;
    width: 9rem;
    line-height: 1.3rem;
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
.Nav-enter-active {
  transition: all 0.8s ease;
}
.Nav-leave-active {
  transition: all 0.8s ease;
}
.Nav-enter, .Nav-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-2rem);
  opacity: 0;
}
</style>