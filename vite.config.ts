import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: set VITE_BASE to '/<repo>/' (e.g. '/jarvix-business-website/')
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
