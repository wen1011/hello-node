const axios = require("axios");

// "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=" + format + "&date=" + today + "&stockNo=" + stockCode
// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`

// axios
//   .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//     params: {
//       response: format,
//       date: today,
//       stockNo: stockCode,
//     },
//   })
//   .then((res) => {
//     // HTTP response
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.error("發生錯誤啦", e);
//   });
//axios
//async function會回傳promise
async function getData() {
  let stockCode = "2330";
  let today = "20211017";
  let format = "json";
  try {
    let result = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );
    console.log(result.date);
  } catch (err) {
    console.error(err);
  }
}
getData();
