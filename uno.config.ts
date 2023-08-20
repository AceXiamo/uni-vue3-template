import { defineConfig, presetUno } from 'unocss'

const remRE = /^-?[\.\d]+rem$/

export default defineConfig({
  // ...UnoCSS options
  theme: {
    preflightRoot: ['page,::before,::after'],
  },
  variants: [
    (matcher) => {
      return {
        matcher: matcher,
        selector: (s: any) => {
          if (/^(.+)?\[(.*)]$/.test(s)) {
            let res: any = s.replace(/\[/g, '_').replace(/\]/g, '_')
            s = res.replaceAll('\\', '')
          }
          if (s.includes(':')) {
            s = s.replace(':', '_')
          }
          if (s.includes("'")) {
            s = s.replaceAll("'", '-')
          }
          if (s.includes('"')) {
            s = s.replaceAll('"', '-')
          }
          s = s.replaceAll('\\', '')
          return s
        },
      }
    },
  ],
  rules: [
    ['text-xl', { 'font-size': '30rpx', 'line-height': '30rpx' }],
    ['text-lg', { 'font-size': '28rpx', 'line-height': '28rpx' }],
    ['text-base', { 'font-size': '26rpx', 'line-height': '26rpx' }],
    ['text-sm', { 'font-size': '24rpx', 'line-height': '24rpx' }],
    ['text-xs', { 'font-size': '22rpx', 'line-height': '22rpx' }],
  ],
  postprocess(util) {
    util.entries.forEach((i) => {
      const value: any = i[1]
      if (value && typeof value === 'string' && remRE.test(value)) {
        i[1] = `${(value.slice(0, -3) as any) * 16 * 2}rpx`
      }
    })
  },
})
