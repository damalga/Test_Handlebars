import path from 'path';
import nodeExternals from 'webpack-node-externals';

export default {
  target: 'node',
  mode: 'production',
  entry: './dist/bundle.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  externals: [nodeExternals()]
};
