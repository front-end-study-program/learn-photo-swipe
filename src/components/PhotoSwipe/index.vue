<template>
  <div ref="lightboxRef">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import PhotoSwipeLightbox from './lightbox/lightbox'

const lightboxRef = ref()

onMounted(() => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: lightboxRef.value
  })

  lightbox.init()
})
</script>

<style lang="less" scoped>

</style>
