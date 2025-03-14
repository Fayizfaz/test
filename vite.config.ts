import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Livaperfumes-/', // Set this to your GitHub repo name
  plugins: [react()],
});
