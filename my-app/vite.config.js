import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Import the Tailwind CSS plugin (MANDATORY)
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    // Add the Tailwind CSS plugin here (MANDATORY)
    tailwindcss(),
  ],
})