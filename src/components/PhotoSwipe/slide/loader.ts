import type PhotoSwipeBase from '../core/base'

/**
 * 懒加载图像
 */
export function lazyLoadData (itemData, instance, index) {

}

/**
 * 懒加载特定幻灯片
 *
 * 会根据视口大小和初始缩放级别加载图像
 */
export function lazyLoadSlide (index: number, instance: PhotoSwipeBase) {
  const itemData = instance.getItemData(index)

  if (instance.dispatch('lazyLoadSlide', { index, itemData }).defaultPrevented) {
    return
  }

  return lazyLoadData(itemData, instance, index)
}
