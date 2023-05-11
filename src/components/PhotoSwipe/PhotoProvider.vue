<template>
  <div @click="onClick">
    <slot />
    <Teleport to="body">
      <PhotoSlider />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { Teleport } from 'vue'
import PhotoSlider from './PhotoSlider.vue'

function onClick (e: MouseEvent) {
  console.log((e.target as HTMLElement).getBoundingClientRect(), 'e')
}
</script>

<style lang="less" scoped>

</style>
