import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from "./types/config";
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options;
  return {
    mode: mode,
    // starting point of our app
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    // destination point of bundled app
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}