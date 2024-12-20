import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Use this if your app is in a subfolder
  build: {
    outDir: 'dist', // Default is 'dist', ensure this matches
  },
  

});
