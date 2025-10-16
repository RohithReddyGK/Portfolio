import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2019', // make JS compatible with react-snap
  },
  optimizeDeps: {
    include: ["react-helmet-async"]
  },
  resolve: {
    dedupe: ["react", "react-dom"]
  }
});
