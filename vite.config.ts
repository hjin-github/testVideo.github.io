import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRouterPlugin from 'vite-plugin-next-react-router';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRouterPlugin({
      pageDir: 'src/container',
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      layout: '_layout',
    }),
  ],
  publicDir: 'public',
  cacheDir: './.vite',
  resolve: {
    alias: {
      '@constant': resolve(__dirname, 'src/constant'),
      '@component': resolve(__dirname, 'src/component'),
      '@container': resolve(__dirname, 'src/container'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@type': resolve(__dirname, 'src/type'),
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://s3.codemon.xyz/hj',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/image': {
        target: 'https://s3.codemon.xyz/hj/image',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/image/, ''),
      },
      '/video': {
        target: 'https://s3.codemon.xyz/hj/video',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/video/, ''),
      },
    },
  },
});
