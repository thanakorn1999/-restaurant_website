import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://172.20.10.4:3057/API",
});

export default axiosInstance;
