import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const { isDev } = options

    const svgLoader = {
        test: /\.svg$/,
        loader: '@svgr/webpack'
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    }

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        //при dev - показываем нормальные классы в бразузере, в prod - сгенерированные
                        localIdentName: isDev 
                            ? '[path][name]__[local]--[hash:base64:5]' 
                            : '[hash:base64:8]'  
                    },
                },
            },
            "sass-loader",
        ],
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            "plugins": [
                    [
                        "i18next-extract", {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true,
                    }
                ],
            ]
          }
        }
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    //Очень важен порядок выгрузки лоадеров. 
    //Если babelLoader поставить раньше typeScriptLoader, то будет ошибка
    return [
        babelLoader,
        typeScriptLoader, 
        cssLoaders,
        fileLoader,
        svgLoader,
    ]
}