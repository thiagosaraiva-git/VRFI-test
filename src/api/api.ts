/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiRequest {
  endpoint: string;
  method?: Method;
  body?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export async function api({ endpoint, method = "GET", body, params, headers }: ApiRequest) {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: endpoint,
      data: body,
      params,
      headers,
    };

    const response = await apiInstance(config);
    return response.data;
  } catch (error: any) {
    console.error("API request error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
}