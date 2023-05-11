<template>
  <div class="pswp-gallery">
    <PhotoProvider>
      <PhotoView>
        <img
          src="../../../assets/images/img-200.jpg"
          alt=""
        >
      </PhotoView>
      <PhotoView>
        <img
          src="../../../assets/images/img-200 (2).jpg"
          alt=""
        >
      </PhotoView>
      <PhotoView>
        <img
          src="../../../assets/images/img-200 (3).jpg"
          alt=""
        >
      </PhotoView>
      <PhotoView>
        <img
          src="../../../assets/images/img-2500 (4).jpg"
          alt=""
        >
      </PhotoView>
      <!-- <a
        href="../../../assets/images/img-2500.jpg"
        data-pswp-width="1669"
        data-pswp-height="2500"
        target="_blank"
      >
        <img
          src="../../../assets/images/img-200.jpg"
          alt=""
        >
      </a>
      <a
        href="../../../assets/images/img-2500 (1).jpg"
        data-pswp-width="1875"
        data-pswp-height="2500"
        data-cropped="true"
        target="_blank"
      >
        <img
          src="../../../assets/images/img-200 (1).jpg"
          alt=""
        >
        Cropped
      </a>
      <a
        href="https://unsplash.com"
        data-pswp-src="../../../assets/images/img-2500 (2).jpg"
        data-pswp-width="2500"
        data-pswp-height="1666"
        target="_blank"
      >
        <img
          src="../../../assets/images/img-200 (2).jpg"
          alt=""
        >
      </a>
      <a
        href="http://example.com"
        data-pswp-src="../../../assets/images/img-2500 (4).jpg"
        data-pswp-width="2500"
        data-pswp-height="1668"
        target="_blank"
      >
        No thumbnail
      </a>
      <div>
        <a
          href="../../../assets/images/img-2500 (3).jpg"
          data-pswp-width="2500"
          data-pswp-height="1667"
          target="_blank"
        >
          <img
            src="../../../assets/images/img-200 (3).jpg"
            alt=""
          >
        </a>
      </div> -->
    </PhotoProvider>
  </div>
</template>

<script setup lang="ts">
import PhotoProvider from '~/components/PhotoSwipe/PhotoProvider.vue'
import PhotoView from '~/components/PhotoSwipe/PhotoView.vue'
</script>

<style lang="less" scoped>
.pswp-gallery {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  width: 155px;
}
img {
  display: block;
  position: relative;
  width: 120px;
  margin-bottom: 18px;
  font-size: 14px;
  height: auto;
}

img {
  max-width: 100%;
}
.pswp-gallery img {
  display: block;
}

[data-cropped] img {
  width: 100%;
  height: 70px;
  object-fit: cover;
}

</style>
