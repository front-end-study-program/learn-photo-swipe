import type { InjectionKey } from 'vue'
import { UpdateItemType, SliderShowType } from './types'

export const InjectionUpdateItem = Symbol('photo-consumer-update-item') as InjectionKey<UpdateItemType>

export const InjectionSliderShow = Symbol('photo-slider-show') as InjectionKey<SliderShowType>
