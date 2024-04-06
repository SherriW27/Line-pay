const express = require("express");
const router = express.Router();
const axios = require("axios");
const HmacSHA256 = require("crypto-js");
const Base64 = require("crypto-js");

require("dotenv").config();

const {
  LINEPAY_CHANNEL_ID,
  LINEPAY_VERSION,
  LINEPAY_SITE,
  LINEPAY_CHANNEL_SECRET_KEY,
  LINE_PAY_RETURN_HOST,
  LINE_PAY_RETURN_CONFIRM_URL,
  LINE_PAY_RETURN_CANCEL_URL,
} = process.env;

const sampleData = require("../sample/sampleData");
// console.log(sampleData);
const orders = {};
/* 前端頁面 */
router
  .get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  })
  .get("/checkout/:id", (req, res) => {
    const { id } = req.params;
    const order = sampleData[id];
    order.orderId = parseInt(new Date().getTime() / 1000);
    // console.log(order);
    orders[order.orderId] = order;
    res.render("checkout", { order });
  });
/*跟Line pay 串接的API */
router.post("/createOrder/:orderId", (req, res) => {
  const { orderId } = req.params;
  const order = orders[orderId];
  console.log("createOrder", order);
  const linePayBody = {
    ...order,
    redirectUrls: {
      confirmUrl: "$(LINE_PAY_RETURN_HOST)$(LINE_PAY_RETURN_CONFIRM_URL)",
      cancelUrl: "$(LINE_PAY_RETURN_HOST)$(LINE_PAY_RETURN_CANCEL_URL)",
    },
  };
  const uri = "/payments/request";
  const nonce = parseInt(new Date().getTime() / 1000);
  const string =
  `$(LINEPAY_CHANNEL_SECRET_KEY)$(uri)$(JSON.stringify(linePayBody))$(nonce)`;
//   const signature = HmacSHA256(string, LINEPAY_CHANNEL_SECRET_KEY);
  //   console.log(linePayBody, signature);

  res.end();
});

module.exports = router;
