"use strict"
import dotenv from 'dotenv'
import fetch_data from "./meta/fetch_data"

dotenv.config()

const access_token: string|undefined = process.env.META_ACCESS_TOKEN


if (typeof access_token === "string") {
  fetch_data(access_token)
}
