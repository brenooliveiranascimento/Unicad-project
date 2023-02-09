import axios from 'axios';
import 'dotenv';

const BASE_URL = process.env.BASE_URL || 'https://localhost:3001';

const connection = axios.create({
  baseURL: BASE_URL,
});

export default connection;
