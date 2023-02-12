import axios from "axios";
const BASE_URL = "http://localhost:3001" || process.env.BACKEND_CONNECTION_ENDPOINT;

const connection = axios.create({
  baseURL: BASE_URL,
});

export default connection;
