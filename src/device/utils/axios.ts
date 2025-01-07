import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'

const api = axios.create({
  baseURL: process.env.ENDPOINT_API_URL,
  timeout: 120 * 1000
})

export interface RequestType extends Omit<AxiosRequestConfig, 'headers'> {
  url: string;
  params?: Record<string, any>;
  headers?: RawAxiosRequestHeaders;
  config?: AxiosRequestConfig;
}

export interface RequestDataType extends RequestType {
  data: Record<string, any> | Record<string, any>[];
}

export default api