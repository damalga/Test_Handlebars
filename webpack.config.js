import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  externals: [nodeExternals()]
};
