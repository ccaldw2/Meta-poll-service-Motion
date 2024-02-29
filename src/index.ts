"use strict"
import dotenv from 'dotenv';
import fetch_data from "./meta/fetch_data";
import yargs from 'yargs';


async function main() {
  dotenv.config()


  const access_token: string|null = (process.argv.slice(2)[0] || null)

  if (typeof access_token === "string") {
    fetch_data(access_token)
  } else {
    console.log("Access token required to poll Facebook API")
  }

}


main()