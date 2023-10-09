import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const svgLoader = {
    test: /\.svg$/,
    loader: '@svgr/webpack'
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoaders = buildCssLoader(isDev)

  const babelLoader = buildBabelLoader(options)

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  // Очень важен порядок выгрузки лоадеров.
  // Если babelLoader поставить раньше typeScriptLoader, то будет ошибка
  return [
    babelLoader,
    typeScriptLoader,
    cssLoaders,
    fileLoader,
    svgLoader
  ]
}
