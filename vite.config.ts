import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from 'unocss/vite'
import classHandlePlugin from './src/core/classHandlePlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [classHandlePlugin(), uni(), UnoCSS()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
