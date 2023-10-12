import { Capacitor } from '@capacitor/core'
const isNative = Capacitor.isNativePlatform
const isWeb = Capacitor.getPlatform() === 'web'
const isIos = Capacitor.getPlatform() === 'ios'
const isAndroid = Capacitor.getPlatform() === 'android'

export const useCapacitor = () => {
  return {
    isNative,
    isWeb,
    isIos,
    isAndroid,
  }
}
