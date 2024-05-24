import axios from "axios";
// import https from "https";

const api = axios.create({
  baseURL: "https://easydine-api.azurewebsites.net/api/v1",
  headers: {
    "X-Channel": "ConfirmUi",
  },
});


export default api;