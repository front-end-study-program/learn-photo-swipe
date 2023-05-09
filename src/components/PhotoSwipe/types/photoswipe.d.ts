import type { SlideData } from '../slide/slide'

export type ElementProvider = string | NodeListOf<HTMLElement> | HTMLElement[] | HTMLElement;

export type Point = {
  x: number;
  y: number;
  id?: string | number;
};

export type DataSourceObject = {
  gallery: HTMLElement;
  items?: HTMLElement[];
};

export type DataSource = SlideData | DataSourceObject

export type PreparedPhotoSwipeOptions = {
  dataSource?: DataSource | undefined;

  bgOpacity: number
  getClickedIndexFn?: ((e: MouseEvent) => number) | undefined;

  /**
   * Defines start slide index.
   */
  index: number;
  initialPointerPos?: Point | null | undefined;
  children?: ElementProvider | undefined;
  childSelector?: string | undefined;
}
export type PhotoSwipeOptions = Partial<PreparedPhotoSwipeOptions>;
