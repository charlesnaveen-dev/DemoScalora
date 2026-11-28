import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('/node_modules/react/') ||
            id.includes('/node_modules/react-dom/') ||
            id.includes('/node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }
          if (
            id.includes('/node_modules/three/') ||
            id.includes('/node_modules/@react-three/')
          ) {
            return 'three-vendor';
          }
          if (id.includes('/node_modules/gsap/') || id.includes('/node_modules/lenis/')) {
            return 'motion-vendor';
          }
          if (id.includes('/node_modules/react-router')) {
            return 'router-vendor';
          }
        },
      },
    },
  },
});
