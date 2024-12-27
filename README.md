# プロジェクト名

このプロジェクトは、ファンサイトのフロントエンド部分を構築するためのものです。

## 使用技術

- HTML
- CSS/SCSS
- JavaScript
- EJS
- Express
- Webpack
- Babel

## 導入したパッケージ

以下のパッケージを使用しています。

### 依存パッケージ

- [ejs](https://www.npmjs.com/package/ejs): `npm install ejs`
- [express](https://www.npmjs.com/package/express): `npm install express`

### 開発依存パッケージ

- [webpack](https://www.npmjs.com/package/webpack): `npm install --save-dev webpack`
- [webpack-cli](https://www.npmjs.com/package/webpack-cli): `npm install --save-dev webpack-cli`
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server): `npm install --save-dev webpack-dev-server`
- [babel-loader](https://www.npmjs.com/package/babel-loader): `npm install --save-dev babel-loader`
- [@babel/core](https://www.npmjs.com/package/@babel/core): `npm install --save-dev @babel/core`
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): `npm install --save-dev @babel/preset-env`

## スクリプト

以下のスクリプトを使用してビルドや開発サーバーの起動を行います。

- ビルド: `npm run build`
- 開発サーバーの起動: `npm start`

## インストール方法

1. リポジトリをクローンします。
    ```sh
    git clone <リポジトリのURL>
    ```
2. 依存パッケージをインストールします。
    ```sh
    npm install
    ```
3. 開発サーバーを起動します。
    ```sh
    npm start
    ```

## ディレクトリ構成

```
/d:/dev/
├── frontend/
│   ├── public/
│   │   └── js/
│   │       └── main.js
│   ├── views/
│   │   └── partials/
│   │       └── header.ejs
│   ├── webpack.config.js
│   └── ...
├── package.json
└── README.md
```

## Babelの設定

Babelを使用して最新のJavaScriptをトランスパイルします。以下の設定を`babel.config.json`に追加します。

```json
{
  "presets": ["@babel/preset-env"]
}
```

## その他

その他の情報や注意点があればここに記載します。
