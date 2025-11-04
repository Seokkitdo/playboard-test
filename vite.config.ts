import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'Playboard',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['svelte', 'svelte/internal', '@mateothegreat/svelte5-router'],
      output: {
        globals: {
          svelte: 'Svelte'
        }
      }
    }
  },
  server: {
    cors: false,
    host: '0.0.0.0',
    port: 6500,
    allowedHosts: [
      'center.imomtae.com',
      '.imomtae.com', // 서브도메인 전체 허용
      'localhost',
      '127.0.0.1'
    ],
    hmr: {
      protocol: 'ws'
    },
    watch: {
      usePolling: true
    },
    proxy: {
      '/api/tosspayments': {
        target: 'https://api.tosspayments.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/tosspayments/, '')
      }
    }
  }
})
