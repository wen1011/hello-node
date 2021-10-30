const express = require("express");

let app = express("path"); // application
require("dotenv").config();
const mysql = require("mysql");
const Promise = require("bluebird");

let connection = mysql.createConnection({
  host: process.env.DB_HOST, // 本機 127.0.0.1
  port: process.env.DB_PORT, // 埠號 mysql 預設就是 3306
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection = Promise.promisifyAll(connection);

// app.use 告訴 express 這裡有一個中間件(middleware)
// middleware 只是一個函式，會有三個參數
app.use((req, res, next) => {
  console.log("我是 AAAA 中間件");

  // 如果沒有 next，那就停在這裡
  next();
  // next 可以讓他往下一關前進
  // 但是目前這個中間件「不需要」知道下一個知道
});

app.use((req, res, next) => {
  let current = new Date();
  console.log(`有人來訪問 at ${current.toISOString()}`);

  // 完全不關心 next 是誰
  // 只知道要給下一個
  next();
  // 低耦合
});
//node.js
// --自己寫
// 第三方
// 內建

//middleware
// --自己寫
// 第三方
// 內建

//app.use(PATH,express.static(檔案夾))
//express.static(檔案夾名稱)是內建中間件
app.use("/static", express.static("static"));
//localhost:3001/static/about.html
// app.use("/pug", express.static("pug-output"));
//localhost:3001/pug/index.html

// 路由 route / router --> 其實也算是一種中間件
// app.Method(Path, Handler)
// Method: GET, POST, PUT, DELETE, PATCH, ...
// Handler 是一個函式，會有兩個參數 request, response
http: app.get("/", (req, res) => {
  console.log("我是首頁");
  res.send("我是 Express 首頁");
  let data = {
    name: "jebnn",
    job: "TEACHER",
    cities: [t, a, e],
  };
  //pug作法
  res.render("index", data);
});

app.get("/member", (req, res, next) => {
  console.log("我是會員頁 1");
  // res.send("我是會員頁");
  next();
});

app.get("/member", (req, res) => {
  console.log("我是會員頁 2");
  res.send("我是會員頁");
});
//前端路由(切換＝react)
//member/proucts,/register,/login,

//http requset

// app.get("/api/test", (req, res) => {
//   res.json({
//     name: "jennt",
//     job: "teacher",
//   });
// });
app.get("/api/todos", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM todos");
  res.json(data);
});
// 職責切割

// 這個中間件是負責做紀錄
app.use((req, res, next) => {
  console.log(`${req.url} 找不到路由`);
  next();
});

// 既然會走到所有路由後面的這個中間件
// 就表示前面所有路由中間件的 path 都比不到
// --> 404 !!
app.use((req, res, next) => {
  console.log("我是路由後面的中間件");
  res.status(404).send("Not Found");
});

// 3001 port
// 3001 port
app.listen(3001, () => {
  connection.connect();
  console.log("express app 啟動了喔");
});
