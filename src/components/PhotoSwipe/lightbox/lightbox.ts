import PhotoSwipeBase from '../core/base'
import type Content from '../slide/content'
import type { PhotoSwipeOptions, Point, DataSource } from '../types'
import { specialKeyUsed, getElementsFromOption } from '../utils/utils'
// import PhotoSwipe from '../photoswipe'
import { lazyLoadSlide } from '../slide/loader'

/**
 * PhotoSwipe Lightbox
 *
 * 如果用户有不受支持的浏览器，则返回默认的浏览器操作（仅打开URL）
 * 将点击事件绑定到对应打开 PhotoSwipe 的链接
 * 解析PhotoSwipe的DOM结构（检索大型图像URL和大小）
 * 初始化PhotoSwipe
 *
 *
 * 加载器选项使用与PhotoSwipe相同的对象，并支持以下选项
 *  gallery - Element | Element[] | NodeList | gallery 元素的字符串选择器
 *  children - Element | Element[] | NodeList | gallery children 元素的字符串选择器
 */
class PhotoSwipeLightbox extends PhotoSwipeBase {
  // options: PhotoSwipeOptions
  _uid: number
  shouldOpen: boolean
  _preloadedContent: Content | undefined
  constructor (options: PhotoSwipeOptions) {
    super(options)
    // this.options = options || {}
    this._uid = 0
    this.shouldOpen = false

    this._preloadedContent = undefined

    this.onThumbnailsClick = this.onThumbnailsClick.bind(this)
  }

  /**
   * 初始化灯箱，调用一次。
   * 为元素绑定点击事件
   */
  init () {
    getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
      galleryElement.addEventListener('click', this.onThumbnailsClick, false)
    })
  }

  onThumbnailsClick (e: MouseEvent) {
    // 使用浏览器默认的行为
    if (specialKeyUsed(e) || window.pswp) return

    // 如果 clientX 和 clientY 都是 0 或者没有定义
    // 函数调用可能是由键盘触发的
    // 就不使用 initialPoint

    // 有一些屏幕阅读器会模仿鼠标位置
    // 所以这不是检测它们的最佳方式

    let initialPoint: Point | null = { x: e.clientX, y: e.clientY }

    if (!initialPoint.x && !initialPoint.y) {
      initialPoint = null
    }

    const clickedIndex = this.getClickedIndex(e)
    // clickedIndex = this.applyFilters('clickedIndex', clickedIndex, e, this)
    const dataSource: DataSource = {
      gallery: e.currentTarget
    }

    if (clickedIndex >= 0) {
      e.preventDefault()
      this.loadAndOpen(clickedIndex, dataSource, initialPoint)
    }
  }

  getClickedIndex (e: MouseEvent): number {
    if (this.options.getClickedIndexFn) {
      return this.options.getClickedIndexFn.call(this, e)
    }

    const clickedTarget = e.target as HTMLElement

    const childElements = getElementsFromOption(
      this.options.children,
      this.options.childSelector,
      e.currentTarget as HTMLElement
    )

    const clickedChildIndex = childElements.findIndex(
      child => child === clickedTarget || child.contains(clickedTarget)
    )

    if (clickedChildIndex !== -1) {
      return clickedChildIndex
    } else if (this.options.children || this.options.childSelector) {
      return -1
    }

    return 0
  }

  loadAndOpen (index: number, dataSource: DataSource, initialPoint: Point | null) {
    // 已经在预览状态
    if (window.pswp) {
      return false
    }

    this.options.index = index

    this.options.initialPointerPos = initialPoint

    this.shouldOpen = true

    this.preload(index, dataSource)

    return true
  }

  /**
   * 按索引加载主模块和幻灯片内容
   */
  preload (index: number, dataSource: DataSource) {
    const { options } = this

    if (dataSource) {
      options.dataSource = dataSource
    }

    if (options.preloadFirstSlide !== false && index >= 0) {
      this._preloadedContent = lazyLoadSlide(index, this)
    }
  }
}

export default PhotoSwipeLightbox
