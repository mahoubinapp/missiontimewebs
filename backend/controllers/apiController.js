//Controller系は、APIのエンドポイントを処理するための関数を提供します。

// /get ルートにアクセスした際に、{ message: 'API data' }を返す関数を提供
exports.getData = (req, res) => {
  res.json({ message: 'API dataを取得する形' });
};