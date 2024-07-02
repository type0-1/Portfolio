// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    include: ['**/*.test.jsx'],  // Change this line if your test files are .jsx
    globals: true,
  },
})
