// expressモジュール・pathモジュールを読み込み、appオブジェクトを生成
const express = require('express');
const app = express(); // expressオブジェクトをappという名前で使えるようにする
const path = require('path');
// ルーティングの設定
const indexRouter = require('./backend/routes/index');// indexRouterにindex.jsのルーティングを設定
const apiRouter = require('./backend/routes/api');// apiRouterにapi.jsのルーティングを設定
// ミドルウェア「ejs」をビューエンジンとして設定
app.set('view engine', 'ejs'); // view engineとは、expressでビューをレンダリングする際に使用するテンプレートエンジンを指定する設定
// ビューのフォルダを指定
app.set('views', path.join(__dirname, 'frontend/views')); 
// ↑第一引数にviewsというフォルダ名を指定し、第二引数にそのフォルダのパスを指定
// viewというフォルダ名を指定することで、expressは自動的にそのフォルダ内のファイルをビューとして扱う

// frontend/publicフォルダを静的ファイルのルートディレクトリとして指定
// expressが静的ファイルを提供する際に、app.use()メソッドを使って指定するが、その際にパスを指定することで、そのパスにアクセスした際に静的ファイルを提供するように設定できる
app.use(express.static(path.join(__dirname, 'frontend/public')));
app.use('/', indexRouter); // ルートパスにアクセスした際にindexRouterを使用するように設定。
// /d:/dev/backend/routes/index.js ファイルのルーティング設定に従って、/d:/dev/frontend/views/index.ejs がレンダリングされます。
app.use('/api', apiRouter); // /apiパスにアクセスした際にapiRouterを使用するように設定。
// ↑例えば画像ファイルにアクセスする際には、/images/ファイル名 というパスを指定することで、frontend/public/images/ファイル名 にアクセスできる

// サーバーを起動(ポート5679番で)
const PORT = process.env.PORT || 5679;
// ↑process.env.PORTは、環境変数PORTが設定されている場合はその値を、設定されていない場合は5679を使用する
app.listen(PORT, () => {
  console.log(`サーバーは http://localhost:${PORT}" で起動しています`);
});