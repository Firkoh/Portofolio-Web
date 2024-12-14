import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  server:{
    port: 5000,
    watch: true,
  },
  plugins: [react(), tailwindcss({
      config: './tailwind.config.js',
    })],
  scripts: {
    tw: 'tailwindcss -i ./src/input.css -o ./src/output.css --watch',
  },
  build: {
    outDir: 'dist',
  },
});

