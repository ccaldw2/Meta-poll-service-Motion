"use strict"
import dotenv from 'dotenv';
import fetch_data from "./meta/fetch_data";
import { RateLimiter } from "limiter";

async function main() {
  dotenv.config();


  const access_token: string|null = (process.argv.slice(2)[0] || null);

  if (typeof access_token === "string") {

    const limiter: RateLimiter = new RateLimiter({ tokensPerInterval: 1, interval: 2000});

    while(true) {
      const remainingRequests: number = await limiter.removeTokens(1);
      let data_fetched: Object = await fetch_data(access_token);
      console.log(data_fetched);
    }
  } 
  else {
    console.log("Access token required to poll Facebook API");
  }
}


main();