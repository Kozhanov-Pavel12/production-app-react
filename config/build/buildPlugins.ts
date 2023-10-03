import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {

  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    // для информирования и процессе сборки
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
  ]

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      // Анализировать размер бандла
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    )
  }
  
  return plugins;
}
