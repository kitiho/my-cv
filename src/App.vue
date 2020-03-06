<template>
  <div id="app" style="overflow:hidden" class="h-100">
    <Toggle-button class="toggle cursor" />
    <transition name="Nav">
      <Nav
        @closeNav="showNav = false"
        v-show="$store.state.isNavOpen"
        class="nav w-100 h-100"
      />
    </transition>
    <div style="position:fixed;top:0;left:0;" class="w-100 h-100">
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
@import "./assets/scss/style.scss";
#app {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}
.toggle {
  width: 70px;
  height: 60px;
  position: fixed;
  top: -20px;
  z-index: 999;
}
</style>
