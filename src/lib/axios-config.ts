import axios from 'axios';

export const ApiCore = axios.create({
  baseURL: process.env.HOST_URL as string,
});
