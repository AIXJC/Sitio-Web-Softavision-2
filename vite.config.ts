import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // expone en 0.0.0.0 para acceso desde el móvil por LAN
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});

