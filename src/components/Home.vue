<template>
  <div class="home bg-blue w-100">
    <Toggle-button class="toggle cursor" @toggleNav="toggleNav" />
    <HomePage />
    <transition name="Nav">
      <Nav @closeNav="showNav = false" v-show="showNav" class="nav w-100" />
    </transition>
  </div>
</template>

<script>
import Nav from "./Nav";
import ToggleButton from "./ToggleButton";
import HomePage from "./HomePage";
export default {
  components: {
    Nav,
    ToggleButton,
    HomePage
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
<style lang="scss" scoped>
.toggle {
  width: 70px;
  height: 60px;
  position: absolute;
  top: -20px;
  z-index: 999;
}
.nav {
  position: absolute;
  top: 0;
  z-index: 100;
}
</style>