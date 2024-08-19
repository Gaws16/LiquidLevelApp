import Axios from "axios";
const BASE_URL = "https://app-liquidlevel-gwc-dev-001.azurewebsites.net";

export const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
