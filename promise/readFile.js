const fs = require("fs");

// fs.readFile("input.txt","utf-8" (err, data) => {
//   if (err) {
//     console.error("發生錯誤", err);
//   } else {
//     console.log("正確讀到", data);
//   }
// });

function readFilePromise() {
    return new Promise((resolve, reject)=>{
        fs.readFile("input.txt", "utf-8", (err,data) =>{
             if (err) {
               reject(err);
             } else {
               resolve(data);
             }
        })
    })
}
readFilePromise().then((data)=>{console.log("正確讀到",data);}).catch((err)=>{
  console.log("錯誤", err);
});
