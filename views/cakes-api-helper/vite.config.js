import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/css/variables.scss";`,
      }
    }
  },
})