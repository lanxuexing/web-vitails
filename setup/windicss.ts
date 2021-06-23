import { defineWindiSetup } from '@slidev/types'

// 对内部 windicss 配置进行扩展
export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        vgreen: "#41B883",
        vblue: "#34495E",
      },
    },
  },
}))