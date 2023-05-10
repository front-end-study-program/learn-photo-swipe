<template>
  <div>
    <PhotoSwipe
      id="gallery--getting-started"
      class="pswp-gallery pswp-gallery--single-column"
    >
      <a
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
      <!-- cropped thumbnail: -->
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
      <!-- data-pswp-src with custom URL in href -->
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
      <!-- Without thumbnail: -->
      <a
        href="http://example.com"
        data-pswp-src="../../../assets/images/img-2500 (4).jpg"
        data-pswp-width="2500"
        data-pswp-height="1668"
        target="_blank"
      >
        No thumbnail
      </a>
      <!-- wrapped with any element: -->
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
      </div>
    </PhotoSwipe>
  </div>
</template>

<script setup lang="ts">
import PhotoSwipe from '~/components/PhotoSwipe/index.vue'
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
.pswp-gallery > * {
  display: block;
  position: relative;
  margin-bottom: 4px;
  margin-right: 4px;
  width: 70px;
}
.pswp-gallery--single-column > * {
  width: 120px;
  margin-bottom: 18px;
  font-size: 14px;
}
img {
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
