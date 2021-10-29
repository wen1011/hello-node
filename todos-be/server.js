const express = require("express");

let app = express(); // application
app.use((req, res, next) => {
  console.log("我是aaa");
  //如果沒有next，
  next();
});
app.use((req, res, next) => {
  console.log("我是aaa");
});
// 路由 route / router
// app.Method(Path, Handler)
// Method: GET, POST, PUT, DELETE, PATCH, ...
// Handler 是一個函式，會有兩個參數 request, response
app.get("/", (req, res) => {
  res.send("我是 Express 首頁");
});

app.get("/member", (req, res) => {
  res.send("我是會員頁");
});

// 3001 port
app.listen(3001, () => {
  console.log("express app 啟動了喔");
});
