import express from "express";
import axios from "axios";
import CryptoJS from "crypto-js";

import utils from "../utils";

const app = express();

app.post("/checkout", async (request, response) => {
  const body = JSON.stringify(request?.body);
  const secretKey =
    "65f0af071ac6cc7d6892b649df1ee6c5dd683c3be60ff39b28092c3fcdef8239a23c6dc3c853ba98";
  const accessKey = "B9E04FB84ABB7EF4900C";
  const salt = CryptoJS.lib.WordArray.random(12).toString();
  const timestamp = (Math.floor(new Date().getTime() / 1000) - 10).toString();
  const signature = utils.getSignature(
    accessKey,
    secretKey,
    body,
    salt,
    timestamp
  );

  try {
    axios({
      method: "post",
      url: "https://sandboxapi.rapyd.net/v1/checkout",
      headers: {
        "Content-Type": "application/json",
        access_key: accessKey,
        salt,
        timestamp,
        signature,
      },
      data: body,
    }).then((res) => {
      response.status(200).send({ success: true, ...res?.data?.data });
    });
  } catch (error) {
    response.status(500).send({ success: false, ...error });
  }
});

export default app;
