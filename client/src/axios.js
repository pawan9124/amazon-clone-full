import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api", // THE API {Cloud function url} URL
});

export default instance;
