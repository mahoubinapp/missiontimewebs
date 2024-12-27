// expressを読み込み、routerオブジェクトを生成
const express = require('express');
const router = express.Router(); // express.Routerは、expressのルーティング機能を提供するオブジェクト
const apiController = require('../controllers/apiController'); // apiController.jsを読み込む

// APIアクセス用のルーティング設定
// GETメソッドでのルーティング設定
router.get('/data', apiController.getData);// GETメソッドでのルーティング設定（/api/dataにアクセスした際にapiController.getDataを実行）


// GETメソッドのルーティング設定（module.exportsでrouterオブジェクトを外部に公開・このファイルをモジュールとして利用するには、他のファイルからrequire()メソッドで読み込む必要がある）
module.exports = router; // routerオブジェクトを外部に公開(ちなみに、同じrouterを使ってはいるが、異なるルートでマウントしているため、異なる処理が実行される)