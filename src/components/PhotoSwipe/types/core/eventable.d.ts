export type PhotoSwipeEventsMap = {
  uiRegister: undefined;
  /**
   * https://photoswipe.com/events/#initialization-events
   */
  uiElementCreate: {
      data: UIElementData;
  };
  beforeOpen: undefined;
  firstUpdate: undefined;
  initialLayout: undefined;
  change: undefined;
  afterInit: undefined;
  /**
   * https://photoswipe.com/events/#opening-or-closing-transition-events
   */
  bindEvents: undefined;
  openingAnimationStart: undefined;
  openingAnimationEnd: undefined;
  closingAnimationStart: undefined;
  /**
   * https://photoswipe.com/events/#closing-events
   */
  closingAnimationEnd: undefined;
  close: undefined;
  /**
   * https://photoswipe.com/events/#pointer-and-gesture-events
   */
  destroy: undefined;
  pointerDown: {
      originalEvent: PointerEvent;
  };
  pointerMove: {
      originalEvent: PointerEvent;
  };
  pointerUp: {
      originalEvent: PointerEvent;
  };
  /**
   * can be default prevented
   */
  pinchClose: {
      bgOpacity: number;
  };
  /**
   * can be default prevented
   *
   *
   * https://photoswipe.com/events/#slide-content-events
   */
  verticalDrag: {
      panY: number;
  };
  contentInit: {
      content: Content;
  };
  /**
   * can be default prevented
   */
  contentLoad: {
      content: Content;
      isLazy: boolean;
  };
  /**
   * can be default prevented
   */
  contentLoadImage: {
      content: Content;
      isLazy: boolean;
  };
  loadComplete: {
      content: Content;
      slide: Slide;
      isError?: boolean;
  };
  loadError: {
      content: Content;
      slide: Slide;
  };
  /**
   * can be default prevented
   */
  contentResize: {
      content: Content;
      width: number;
      height: number;
  };
  imageSizeChange: {
      content: Content;
      width: number;
      height: number;
      slide: Slide;
  };
  /**
   * can be default prevented
   */
  contentLazyLoad: {
      content: Content;
  };
  /**
   * can be default prevented
   */
  contentAppend: {
      content: Content;
  };
  /**
   * can be default prevented
   */
  contentActivate: {
      content: Content;
  };
  /**
   * can be default prevented
   */
  contentDeactivate: {
      content: Content;
  };
  /**
   * can be default prevented
   */
  contentRemove: {
      content: Content;
  };
  /**
   * can be default prevented
   *
   *
   * undocumented
   */
  contentDestroy: {
      content: Content;
  };
  /**
   * can be default prevented
   */
  imageClickAction: {
      point: Point;
      originalEvent: PointerEvent;
  };
  /**
   * can be default prevented
   */
  bgClickAction: {
      point: Point;
      originalEvent: PointerEvent;
  };
  /**
   * can be default prevented
   */
  tapAction: {
      point: Point;
      originalEvent: PointerEvent;
  };
  /**
   * can be default prevented
   */
  doubleTapAction: {
      point: Point;
      originalEvent: PointerEvent;
  };
  /**
   * can be default prevented
   */
  keydown: {
      originalEvent: KeyboardEvent;
  };
  moveMainScroll: {
      x: number;
      dragging: boolean;
  };
  firstZoomPan: {
      slide: Slide;
  };
  gettingData: {
      slide: Slide | undefined;
      data: SlideData;
      index: number;
  };
  beforeResize: undefined;
  resize: undefined;
  viewportSize: undefined;
  updateScrollOffset: undefined;
  slideInit: {
      slide: Slide;
  };
  afterSetContent: {
      slide: Slide;
  };
  slideLoad: {
      slide: Slide;
  };
  /**
   * can be default prevented
   */
  appendHeavy: {
      slide: Slide;
  };
  appendHeavyContent: {
      slide: Slide;
  };
  slideActivate: {
      slide: Slide;
  };
  slideDeactivate: {
      slide: Slide;
  };
  slideDestroy: {
      slide: Slide;
  };
  beforeZoomTo: {
      destZoomLevel: number;
      centerPoint: Point | undefined;
      transitionDuration: number | false | undefined;
  };
  zoomPanUpdate: {
      slide: Slide;
  };
  initialZoomPan: {
      slide: Slide;
  };
  calcSlideSize: {
      slide: Slide;
  };
  resolutionChanged: undefined;
  /**
   * can be default prevented
   */
  wheel: {
      originalEvent: WheelEvent;
  };
  /**
   * can be default prevented
   */
  contentAppendImage: {
      content: Content;
  };
  /**
   * can be default prevented
   */
  lazyLoadSlide: {
      index: number;
      itemData: SlideData;
  };
  lazyLoad: undefined;
  calcBounds: {
      slide: Slide;
  };
  /**
   * legacy
   */
  zoomLevelsUpdate: {
      zoomLevels: ZoomLevel;
      slideData: SlideData;
  };
  init: undefined;
  initialZoomIn: undefined;
  initialZoomOut: undefined;
  initialZoomInEnd: undefined;
  initialZoomOutEnd: undefined;
  numItems: {
      dataSource: DataSource | undefined;
      numItems: number;
  };
  itemData: {
      itemData: SlideData;
      index: number;
  };
  thumbBounds: {
      index: number;
      itemData: SlideData;
      instance: PhotoSwipe;
  };
};
