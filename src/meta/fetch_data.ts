import axios from "axios";

async function fetch_data(access_token:string) {
  try {
    let meta_api_version: string|undefined = process.env.META_API_VERSION
    
    let fetch_fields: string[] = ["id", "first_name", "last_name"]
    let fetch_fields_concat: string = fetch_fields.join("%2C")
    
    let url: string = `https://graph.facebook.com/${meta_api_version}/me?fields=${fetch_fields_concat}&access_token=${access_token}`;
  
    let response = await axios.get(url)
    let data = response.data

    return data;
  } catch (error) {
   return error 
  }
}

export default fetch_data;