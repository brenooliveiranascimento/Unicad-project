import axios from "axios";
const BASE_URL = "https://unicad-project-production.up.railway.app" || process.env.BACKEND_CONNECTION_ENDPOINT;

const connection = axios.create({
  baseURL: BASE_URL,
});

export default connection;
