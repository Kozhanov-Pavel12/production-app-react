import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      // исправляем проблему с кэшированием
      filename: '[name].[contenthash].js',
      path: paths.build,
      // чистим папку build при каждом npx webpack
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    // позволяет увидеть, где и в каком файле произошла ошибка
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      // rules - предназначен для обработки файлов, которые выходят за рамки JS
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    // скрыть варнинги с Limits Size
    performance: {
      hints: false
    }
  }
}
