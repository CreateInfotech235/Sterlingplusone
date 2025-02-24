import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Ensure proper MIME types are set
    fs: {
      strict: false
    }
  }
})