import type { ElementProvider } from '../types'

/**
 * 检查是否发送了点击或按键按下事件
 * 使用特殊键或通过鼠标滚轮
 */
export function specialKeyUsed (e: MouseEvent | KeyboardEvent) {
  return ('button' in e && e.button === 1) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey
}

/**
 * 解析 `gallery` or `children` 选项
 * 获取标签列表
 */
export function getElementsFromOption (option?: ElementProvider, legacySelector?: string, parent: Document | HTMLElement = document) {
  let elements: HTMLElement[] = []

  if (option instanceof Element) {
    elements = [option]
  } else if (option instanceof NodeList || Array.isArray(option)) {
    elements = Array.from(option)
  } else {
    const selector = typeof option === 'string' ? option : legacySelector
    if (selector) {
      elements = Array.from(parent.querySelectorAll(selector))
    }
  }

  return elements
}
