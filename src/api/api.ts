/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiRequest {
  endpoint?: string;
  method?: Method;
  body?: unknown;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
}

export async function api({
  endpoint = "",
  method = "GET",
  body,
  params,
  headers,
}: ApiRequest): Promise<any> {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
      data: body,
      params,
      headers,
    };

    const response = await axiosInstance(config);
    return response.data;
  } catch (error: any) {
    console.error("API request error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
}
