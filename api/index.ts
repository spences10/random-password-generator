import { NowRequest, NowResponse } from "@vercel/node";
import { getFunPassword } from "../src/random-password";

export default (_req: NowRequest, res: NowResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", `true`);
  res.setHeader("Access-Control-Allow-Origin", "*");

  return res.json({ password: getFunPassword() });
};
