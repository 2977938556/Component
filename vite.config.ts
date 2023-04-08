import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"



export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    open: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  }
})
