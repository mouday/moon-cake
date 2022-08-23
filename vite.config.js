import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode:', mode)

  return {
    plugins: [vue()],

    base: mode == 'production' ? '/moon-cake/' : '/',

    server: {
      open: true,
    },
  }
})
