import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [
      RubyPlugin(),
    ],
    css: {},
  };

  if (mode === 'development') {
    config.css.devSourcemap = true;
  }

  return config;
});
