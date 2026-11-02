import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目页部署在子路径 /ui-portfolio/ 下，构建时需设置 base
const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/ui-portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5174,
    host: true,
  },
})
