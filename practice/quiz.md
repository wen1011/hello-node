`function readData(idx) {
for (let i = 0; i < 100; i++) {
idx++;
console.log(idx);
}
if (idx < 500) {
readData(idx);
}
}

readData(0);
console.log("after");
`

- 程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？

- 提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

![](https://i.imgur.com/jPqECLU.jpg)

1. 1~100
2. 101~500
3. after

執行 `console.log(idx)`，從 Call stack 移除 `console.log(idx)`，再執行 `readData(idx)`，再從 Call stack 移除 `readData(idx)`，最後執行 `console.log("after")`，清空 Call stack。

`function readData(idx) {
for (let i = 0; i < 100; i++) {
idx++;
console.log(idx);
}
if (idx < 500) {
setTimeout(function () {
readData(idx);
}, 0);
}
}

readData(0);
console.log("after");`

- 程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？

- 提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

![](https://i.imgur.com/0Z7M2sA.jpg)

1. 1~100
2. after
3. 101~500

我們使用 0 秒，先將 callback 放到 WebAPIs 的計時器中，當時間到時，把該 callback 放到工作佇列（task queue）內，「等到」所有堆疊的內容都被清空後才會「立即」執行這個 callback。
也就是說會依序 console 出來的內容是
`console.log(idx)` --> `console.log("after")` --> `readData(idx)`
