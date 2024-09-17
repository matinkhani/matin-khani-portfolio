import { API_URL } from "@/config/global";
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export const httpServer: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpServer.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export default httpServer;
