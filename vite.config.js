import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [
      RubyPlugin(),
    ],
    css: {},

    build: {
      rollupOptions: {
        output: {
          // Rename assets to ensure they don't start with an underscore
          // prefix, since Middleman will then ignore those in the dev server.
          chunkFileNames: 'assets/c-[name]-[hash].js',
          assetFileNames: "assets/a-[name]-[hash][extname]",
        },
      },
    },
  };

  if (mode === 'development') {
    config.build.sourcemap = true;
    config.css.devSourcemap = true;
  }

  return config;
});
