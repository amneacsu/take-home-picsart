import { rspack } from '@rspack/core';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

export default {
  devServer: {
    hot: !isProduction,
    liveReload: !isProduction,
  },
  mode: isProduction ? 'production' : 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    clean: true,
  },
  plugins: [
    new Dotenv({
      safe: true,
    }),
    new rspack.HtmlRspackPlugin({
      favicon: path.join('src', 'assets', 'icon.png'),
      template: path.join('src', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
};
