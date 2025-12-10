import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/niamul007.github.io-weather-app/', // <- MUST match your repo name
  plugins: [react(), tailwindcss()],
})
