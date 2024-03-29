import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {type BuildOptions} from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'css-loader' : MiniCssExtractPlugin.loader,
            'sass-loader'
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'babel-plugin-styled-components',
                        {
                            displayName: true,
                            fileName: false
                        }
                    ],
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}
