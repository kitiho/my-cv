<template>
  <div class="nav bg-white">
    <div
      class="nav-items fs-bold py-5 fs-lg d-flex flex-column jc-around ai-start px-4"
    >
      <div class="fs-xs pb-2 d-flex jc-between ai-center w-100">
        <span>KNOW ME FROM</span>
      </div>
      <div
        v-for="(item, i) in navItems"
        :class="activeID === i ? 'active' : ''"
        @click="changeSite(item, i)"
        @mouseenter="activeID = i"
        :key="i"
        class="px-3 nav-item w-100 h-3 d-flex ai-center"
      >
        <span class="fs-xs">0{{ i + 1 }}</span
        ><span class="px-3">{{ item }}</span>
        <transition name="nav-img"
          ><img
            class="ml-3 px-2 nav-item-img"
            v-show="activeID == i"
            width="120"
            src="../assets/contact.svg"
            alt=""
        /></transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: ["HOME", "WORK", "ABOUT", "CONTACT"],
      activeID: 0
    };
  },
  methods: {
    changeSite(item, i) {
      this.activeID = i;
      this.$store.commit("closeNav");
      this.$router.push(`/${item.toLowerCase()}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../assets/scss/style.scss";

.nav {
  position: fixed;
  height: 100%;
  overflow: hidden;
  top: 0;
  z-index: 998;
  transition: all 0.8s ease;
  .mask {
    position: absolute;
    z-index: -30;
    width: 100%;
    height: 100%;
  }
  .nav-items {
    height: 100%;
    .nav-item {
      transition: all 0.3s ease;
      .nav-item-img {
        animation: move infinite ease;
      }
    }
    .active {
      background: map-get($map: $colors, $key: "blue");
      color: white;
      box-shadow: 0px 6px 16px -5px rgba(0, 95, 255, 1);
    }
  }
  .nav-img-enter-active {
    transition: all 0.3s ease;
  }
  .nav-img-leave-active {
    transition: all 0.3s ease;
  }
  .nav-img-enter, .nav-img-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-1rem);
    opacity: 0;
  }
}
</style>