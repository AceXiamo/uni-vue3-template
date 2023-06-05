import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingStore = defineStore('setting', () => {
  // 自定义顶部，微信小程序支持 / 抖音小程序不支持
  const isCustom = ref(true)
  // 顶部高度（胶囊距离顶部的高度
  const topH = ref(0)
  // 胶囊高度
  const capsuleH = ref(0)
  // IOS机型且包含小白条（IOS全面屏机型
  const isAppleAndHasLine = ref(false)

  const setIsCustom = (val: boolean) => isCustom.value = val
  const setTopH = (val: number) => topH.value = val
  const setCapsuleH = (val: number) => capsuleH.value = val
  const setIsAppleAndHasLine = (val: boolean) => isAppleAndHasLine.value = val

  return { isCustom, topH, capsuleH, isAppleAndHasLine, setIsCustom, setTopH, setCapsuleH, setIsAppleAndHasLine }
})
