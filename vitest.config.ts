import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',   // ブラウザを模した環境でテスト
    globals: true,          // describe, it, expect をグローバルで使える
    setupFiles: './vitest.setup.ts', // 初期設定ファイル
    include: ['app/**/*.test.{ts,tsx}'], // テスト対象のファイル
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
})