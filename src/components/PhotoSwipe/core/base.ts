import type { PhotoSwipeOptions, SlideData } from '../types'
import { getElementsFromOption } from '../utils/utils'
import Eventable from './eventable'

export default class PhotoSwipeBase extends Eventable {
  options: PhotoSwipeOptions
  constructor (options: PhotoSwipeOptions) {
    super()
    this.options = options || {}
  }

  /**
   * 获取当前索引项
   */
  getItemData (index: number) {
    const dataSource = this.options?.dataSource

    let dataSourceItem: SlideData | HTMLElement = {}

    if (Array.isArray(dataSource)) {
      dataSourceItem = dataSource[index]
    } else if (dataSource && 'gallery' in dataSource) {
      if (!dataSource.items) {
        dataSource.items = this._getGalleryDOMElements(dataSource.gallery)
      }

      dataSourceItem = dataSource.items[index]
    }

    let itemData = dataSourceItem

    if (itemData instanceof Element) {
      itemData = this._domElementToItemData(itemData)
    }
  }

  /**
   * 获取 DOM 元素的数组
   * 基于 childSelector 和 gallery 元素
   */
  _getGalleryDOMElements (galleryElement: HTMLElement): HTMLElement[] {
    if (this.options?.children || this.options?.childSelector) {
      return getElementsFromOption(
        this.options.children,
        this.options.childSelector,
        galleryElement
      ) || []
    }

    return [galleryElement]
  }

  /**
   * 将DOM元素转换为项数据对象
   */
  _domElementToItemData (element: HTMLElement): SlideData {
    const itemData: SlideData = {
      element
    }

    const linkEl: HTMLAnchorElement =
      element.tagName === 'A'
        ? element as HTMLAnchorElement
        : element.querySelector('a')!

    if (linkEl) {
      // 图片链接
      itemData.src = linkEl.dataset.pswpSrc || linkEl.href

      if (linkEl.dataset.pswpSrcset) {
        itemData.srcset = linkEl.dataset.pswpSrcset
      }

      itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0
      itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0

      // 兼容遗留属性
      itemData.w = itemData.width
      itemData.h = itemData.height

      if (linkEl.dataset.pswpType) {
        itemData.type = linkEl.dataset.pswpType
      }

      const thumbnailEl = element.querySelector('img')

      if (thumbnailEl) {
        itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src
        itemData.alt = thumbnailEl.getAttribute('alt') ?? ''
      }

      if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
        itemData.thumbCropped = true
      }
    }

    return this.applyFilters('domItemData', itemData, element, linkEl)
  }
}
