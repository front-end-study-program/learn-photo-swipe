<template>
  <span
    ref="consumerRef"
    class="photo-consumer"
    @click="onThumbnailsClick"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { onMounted, inject, ref } from 'vue'
import uniqueId from '../utils/uniqueId'
import { InjectionUpdateItem } from '../constants'

const props = defineProps<{
  src: string
}>()
const consumerRef = ref<HTMLElement>()
const updateItem = inject(InjectionUpdateItem)

const key = uniqueId()
const getItemData = () => ({
  key,
  originRef: consumerRef.value,
  src: props.src
})

onMounted(() => {
  updateItem?.(getItemData())
})

function onThumbnailsClick (e: MouseEvent) {
  console.log(e, 'e')
}
</script>

<style lang="less" scoped>

</style>
