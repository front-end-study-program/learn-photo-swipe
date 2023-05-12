<template>
  <div class="pswp-gallery">
    <PhotoProvider>
      <PhotoConsumer
        v-for="(img, idx) in images"
        :key="idx"
        class="mb-14"
        :src="img"
      >
        <img
          :src="img"
          alt=""
        >
      </PhotoConsumer>
    </PhotoProvider>
  </div>
</template>

<script setup lang="ts">
import { PhotoProvider, PhotoConsumer } from '~/components/PhotoSwipe'

const files = import.meta.glob<{default: string}>('~/assets/images/*', { eager: true })
const images: string[] = []

for (const key in files) {
  images.push(files[key].default)
}

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

.mb-14 {
  margin-bottom: 14px;
}

img {
  display: block;
  position: relative;
  width: 120px;
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
