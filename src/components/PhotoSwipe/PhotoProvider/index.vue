<template>
  <slot />
  <PhotoSlider
    :visible="visible"
    :items="items"
    :idx="idx"
  />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import PhotoSlider from '../PhotoSlider/index.vue'
import { ItemType } from '../types'
import { InjectionSliderShow, InjectionUpdateItem } from '../constants'
const items = ref<ItemType[]>([])
function updateItem (item: ItemType) {
  const matchIdx = items.value.findIndex(i => i.key === item.key)
  if (matchIdx !== -1) {
    items.value.splice(matchIdx, 1, item)
    return
  }

  items.value.push(item)
}
provide(InjectionUpdateItem, updateItem)

const idx = ref(0)
const visible = ref(false)
function getClickedIdex (key:string) {
  const clickedIdx = items.value.findIndex(item => item.key === key)
  if (clickedIdx === -1) return 0
  return clickedIdx
}
function showSlider (key: string) {
  idx.value = getClickedIdex(key)
  visible.value = true
}
provide(InjectionSliderShow, showSlider)

</script>

<style lang="less" scoped>

</style>
