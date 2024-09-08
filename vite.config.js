import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        services: 'service.html',
        contact: 'contact.html'
      },
      output: {
        // Customize output filenames to ensure proper asset handling
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      }
    }
  },
  // Ensure Vite correctly handles the public directory
  publicDir: 'public'
});
