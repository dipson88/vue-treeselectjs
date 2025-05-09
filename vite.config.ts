import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Treeselect.vue'),
      name: 'vue-treeselectjs',
      fileName: 'vue-treeselectjs'
    },
    rollupOptions: {
      external: ['vue', 'treeselectjs'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'vue-treeselectjs.css'
          }

          return assetInfo.name
        },
        globals: {
          vue: 'Vue',
          treeselectjs: 'Treeselect',
          'vue-treeselectjs': 'VueTreeselect'
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true
    })
  ]
})
