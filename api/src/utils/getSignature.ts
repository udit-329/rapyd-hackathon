import CryptoJS from "crypto-js";

export default (
  accessKey: string,
  secretKey: string,
  body: string,
  salt: string,
  timestamp: string
): string => {
  const to_sign =
    "post" + "/v1/checkout" + salt + timestamp + accessKey + secretKey + body;
  const signature = CryptoJS.enc.Hex.stringify(
    CryptoJS.HmacSHA256(to_sign, secretKey)
  );
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(signature));
};
