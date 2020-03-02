<template>
  <div class="menu back menu--3">
    <label>
      <input style="visibility:hidden" type="checkbox" @click="toggleNav" />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30" />
        <path
          :style="open ? 'stroke: #efefef;' : 'stroke: #000;'"
          class="line--1"
          d="M0 40h62c18 0 18-20-17 5L31 55"
        />
        <path
          :style="open ? 'stroke: #efefef;' : 'stroke: #000;'"
          class="line--2"
          d="M0 50h80"
        />
        <path
          :style="open ? 'stroke: #efefef;' : 'stroke: #000;'"
          class="line--3"
          d="M0 60h62c18 0 18 20-17-5L31 45"
        />
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true
    };
  },
  methods: {
    toggleNav() {
      this.open = !this.open;
      this.$emit("toggleNav");
    }
  }
};
</script>

<style lang="scss" scoped>
input {
}
path {
  fill: none;
  stroke: #efefef;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}
circle {
  fill: #fff3;
  opacity: 0;
}
.back input:checked + svg {
  .line--1,
  .line--3 {
    --length: 8.602325267;
  }
}
.menu--3 {
  .line--1,
  .line--3 {
    --total-length: 126.38166809082031;
  }
  .line--2 {
    --total-length: 80;
  }
  input:checked + svg {
    .line--1,
    .line--3 {
      --offset: -109.1770175568;
    }
  }
}
</style>