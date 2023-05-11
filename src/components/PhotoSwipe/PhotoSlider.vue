<template>
  <div class="pswp pswp--open">
    <div class="bg" />
    <div class="pswp__scroll-wrap" />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.pswp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;
  touch-action: none;
  outline: 0;
  opacity: 1;
  contain: layout style size;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  transform: translateZ(0);
  will-change: opacity;
}
.pswp--open {
  display: block;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
.pswp__scroll-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
