import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7000/api", // THE API {Cloud function url} URL
});

export default instance;
