import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:5001/clone-46b75/us-central1/api",
  baseURL: "https://us-central1-clone-46b75.cloudfunctions.net/api",
});

export default instance;
