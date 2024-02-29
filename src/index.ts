"use strict"
import dotenv from 'dotenv';
import fetch_data from "./meta/fetch_data";
import yargs from 'yargs';


dotenv.config()

const options = yargs
  .usage("Usage: -t <Access Token>")
  .option("t", {alias:"token", describe:"access token", type:"string", demandOption: true})
  .argv;

// TODO: Move to args & Remove env
const access_token: string|undefined = process.env.META_ACCESS_TOKEN


if (typeof access_token === "string") {
  fetch_data(access_token)
}
