<template>
  <div id="app" style="overflow:hidden" class="h-100">
    <Toggle-button class="toggle cursor" @toggleNav="toggleNav" />
    <transition name="Nav">
      <Nav
        @closeNav="showNav = false"
        v-show="showNav"
        class="nav w-100 h-100"
      />
    </transition>
    <div style="position:fixed;top:0;left:0" class="w-100 h-100">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import Nav from "./components/Nav";
import ToggleButton from "./components/ToggleButton";
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
      showNav: false
    };
  }
};
</script>


<style lang="scss">
.toggle {
  width: 70px;
  height: 60px;
  position: fixed;
  top: -20px;
  z-index: 999;
}
.nav {
  position: absolute;
  top: 0;
  z-index: 998;
  transition: all 0.8s ease;
}
</style>
