export type ItemType = {
  // 唯一 id
  key: string
  // 图片地址
  src: string
  // 包裹图片的容器
  originRef?: HTMLElement | null
}

export type UpdateItemType = (item: ItemType) => void

export type SliderShowType = (key: string) => void
