import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  
  return {
    plugins: [react()],
    
    // Resolve aliases for cleaner imports
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@assets': resolve(__dirname, 'src/assets'),
      },
    },
    
    // Development server configuration
    server: {
      port: 3000,
      open: true,
      cors: true,
      strictPort: false,
      hmr: {
        overlay: true,
      },
    },
    
    // Build options
    build: {
      outDir: 'dist',
      sourcemap: !isDev ? 'hidden' : true,
      minify: !isDev ? 'esbuild' : false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
    },
    
    // CSS configuration
    css: {
      devSourcemap: true,
      modules: {
        scopeBehaviour: 'local',
      },
    },
    
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  };
});
