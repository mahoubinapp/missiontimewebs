const path = require('path');

module.exports = {
  entry: './frontend/public/js/main.js', // エントリーポイント。
  // エントリーポイントとは、webpackがビルドを開始するファイルのこと。
  // このファイルのあるディレクトリを基準に、importやrequireで読み込んでいるファイルを解決する。
  output: {
    filename: 'main_webpack.js', // 出力ファイル名
    path: path.resolve(__dirname, './frontend/public/js/dist'), // 出力ディレクトリ
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScriptファイルの処理
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babelを使用してトランスパイル
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 画像ファイルの処理
        type: 'asset/resource',// asset/resourceは画像ファイルをコピーする。
        //具体的には、画像ファイルを出力ディレクトリにコピーし、そのパスを返す。
      },
    ],
  },
  devServer: {
    contentBase: './frontend/public/js/dist', // 開発サーバのコンテンツベース
  },
};
