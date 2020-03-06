<template>
  <div class="contact px-4 py-5 h-100 bg-grey" style="overflow:hidden">
    <div
      style="height:60%;"
      class="d-flex py-5 text-white  flex-column ai-start jc-around"
    >
      <div class="pb-5 fs-bold fs-sm" style="animation:title ease 0.8s">Contact</div>
      <span class="fs-md fs-bold" style="animation:homepage-body ease 1s"
        >以下是我的<span class="contactText">联系方式</span></span
      >
      <span class="fs-light fs-sm pt-3" style="width:60%;animation:homepage-body ease 1.3s;"
        >You can <span class="contactText2">contact me</span> through the
        following way.</span
      >
      <span class="fs-light fs-sm pt-3" style="animation:homepage-body ease 1.6s"
        >下にあるのは私の<span class="contactText3">連絡先</span>です。</span
      >
    </div>
    <div
      style="height:40%;animation:homepage-body ease 1.8s"
      class="d-flex px-4 pt-3 ai-start jc-around text-white"
      
    >
      <i class="iconfont icon-qq fs-lg "></i>
      <i class="iconfont icon-changgewechat fs-lg "></i>
      <i class="iconfont icon-git fs-lg "></i>
      <i class="iconfont icon-mail fs-lg "></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contactText,
.contactText2,
.contactText3 {
  position: relative;
  z-index: 1;
}
.contactText::after {
  content: "";
  position: absolute;
  display: block;
  top: 1rem;
  left: 0;
  background: #185cf6;
  width: 4.2rem;
  height: 0.5rem;
  z-index: -1;
}
.contactText2::after {
  content: "";
  position: absolute;
  display: block;
  top: 0.8rem;
  left: 0;
  background: #185cf6;
  width: 5rem;
  height: 0.3rem;
  z-index: -1;
}
.contactText3::after {
  content: "";
  position: absolute;
  display: block;
  top: 0.8rem;
  left: 0.2rem;
  background: #185cf6;
  width: 4.4rem;
  height: 0.3rem;
  z-index: -1;
}
</style>