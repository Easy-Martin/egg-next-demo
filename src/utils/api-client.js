import axios from "@huangjingjing/axios-fetch";

const client = axios.create({
  baseURL: "/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default client;
