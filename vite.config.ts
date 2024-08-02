import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@database": "/src/assets/database",
      "@icons": "/src/assets/icons",
      "@query-client": "/src/assets/query-client",
      "@validations": "/src/assets/validations",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@routes": "/src/routes",
      "@state": "/src/state",
      "@styles": "/src/styles",
      "@interfaces": "/src/interfaces",
    },
  },
})
