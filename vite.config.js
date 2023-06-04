import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

// Load environment variables based on the current mode
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      laravel({
        input: [
          'resources/sass/app.scss',
          'resources/js/app.js',
        ],
        refresh: true,
      }),
      vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@': '/resources/js',
      },
    },
    define: {
      'process.env': process.env,
    },
  };
});