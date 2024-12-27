// expressを読み込み、routerオブジェクトを生成
const express = require('express');
const router = express.Router(); // express.Routerは、expressのルーティング機能を提供するオブジェクト

// GETメソッドでのルーティング設定
router.get('/', (req, res) => { // reqはリクエスト情報を、resはレスポンス情報を格納するオブジェクト
  res.render('index', { 
    title: 'テスト - ポータル' ,
    description: '株式会社missiontimeが運営するVTuberグループ「りぷらい！」・Vユニット「さまえる」・Vライバー事務所「みっしょんたいむ Re:ろ～ど」の非公式応援ファンサイトです。各missiontime系列配信者の活動状況をまとめております。'
  }); // ここのindexは、viewsフォルダ内のindex.ejsを指す。titleは、index.ejs内で使用する変数。
});

// GETメソッドのルーティング設定（module.exportsでrouterオブジェクトを外部に公開・このファイルをモジュールとして利用するには、他のファイルからrequire()メソッドで読み込む必要がある）
module.exports = router; // routerオブジェクトを外部に公開