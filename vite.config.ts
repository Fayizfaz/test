import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/livaperfumes.github.io/', // Update with your repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
