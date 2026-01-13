// src/redux/api/axiosBaseQuery.ts
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

type AxiosBaseQueryArgs = {
  baseUrl: string;
};

type RequestArgs = {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
};

const axiosBaseQuery =
  ({ baseUrl }: AxiosBaseQueryArgs): BaseQueryFn<RequestArgs, unknown, unknown> =>
  async ({ url, method = "GET", data, params, headers }) => {
    try {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...headers,
        },
      });

      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError<any>;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
