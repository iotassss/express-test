// expressモジュールを読み込む
// expressをインスタンス化してappに代入
const express = require('express');
const app = express();

// ルーティングを行う
// '/'にgetでアクセスすると 'express!' を返す
app.get('/', (req, res, next) => {
  res.send('express!');
});

// '/hello'にgetでアクセスすると 'hello world' を返す
app.get('/hello', (req, res, next) => {
  res.send('Hello worlDDDDD!');
});

// 3000番でポートを開き、サーバを起動
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
