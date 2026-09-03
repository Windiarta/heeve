import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: { entry: { index: './src/main.tsx' } },
  output: { assetPrefix: process.env.NODE_ENV === 'production' ? '/heeve/' : '/' },
  plugins: [pluginReact()],
  html: { title: 'heeve' },
});
