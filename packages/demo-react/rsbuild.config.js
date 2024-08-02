import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
const path = require('path');

export default defineConfig({
  output: {
    assetPrefix: '/',

    distPath: {
      root: path.resolve(__dirname, 'dist'),
    },
    cleanDistPath: true,
  },

  tools: {

  },
  dev: {
    assetPrefix: '/',
  },
  source: {
    entry: {
      index: './src/main.tsx',
    },
    alias: {
      '@': path.join(__dirname, '/src'),
      src: path.join(__dirname, '/src'),
      actions: path.join(__dirname, '/src/actions'),
      style: path.join(__dirname, '/src/style'),
      constants: path.join(__dirname, '/src/constants'),
      containers: path.join(__dirname, '/src/containers'),
      components: path.join(__dirname, '/src/components'),
      reducers: path.join(__dirname, 'reducers'),
      utils: path.join(__dirname, '/src/utils'),
    },
    include: [path.resolve(__dirname, '../../packages')],
  },
  plugins: [
    pluginReact(), // 启用 React 插件
  ],
  html: {
    template: './index.html',
  },
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: {
      index: '/',
    },

  },
});
