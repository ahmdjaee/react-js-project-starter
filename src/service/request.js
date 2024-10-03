import axios from "axios";
import { errorHandler } from "./errorHandler";
import { successHandler } from "./successHandler";
import { getCurrentUserAndToken, removeUserAndToken } from "./auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const data = getCurrentUserAndToken();
    if (data) {
      config.headers["Authorization"] = `Bearer ${data.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      removeUserAndToken();
    }
    return Promise.reject(error);
  }
);

const request = {
  get: async (url) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  post: async (url, data) => {
    try {
      const response = await api.post(url, data);
      successHandler(response);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  postWithFile: async (url, data) => {
    try {
      const response = await api.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      successHandler(response);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  put: async (url, data) => {
    try {
      const response = await api.put(url, data);
      successHandler(response);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  putWithFile: async (url, data) => {
    try {
      const response = await api.put(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      successHandler(response);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  patch: async (url, data) => {
    try {
      const response = await api.patch(url, data);
      successHandler(response);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  delete: async (url, data) => {
    try {
      const response = await api.delete(url, data);
      successHandler(response);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
};

export { api, request };
