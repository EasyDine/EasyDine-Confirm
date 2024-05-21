import axios from "axios";
// import https from "https";

const api = axios.create({
  baseURL: "https://localhost:5000/api/v1",
  headers: {
    "X-Channel": "ConfirmUi",
  },
});


export default api;