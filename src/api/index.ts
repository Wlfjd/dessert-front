import axios, { AxiosResponse } from 'axios';

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;
const TMP_TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwOTY5NjIxNSwiZXhwIjoxNzA5NzA3MDE1LCJpZCI6OH0.vnt0sM8_KGCV7v86cnn1i-nLTAyiPJYQyydffEBj_uI';

async function get<T>(endpoint: string, init?: RequestInit | undefined) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  const data: T = await res.json();
  return data;
}

async function post<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function formPost<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  return axios.post(serverUrl + endpoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function put<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function formPut<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  return axios.putForm(serverUrl + endpoint, data, {
    headers: {
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function patch<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  const bodyData = JSON.stringify(data);

  return axios.patch(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function formPatch<T, D>(endpoint: string, data: D): Promise<AxiosResponse<T>> {
  return axios.patch(serverUrl + endpoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
      Authorization: TMP_TOKEN
    }
  });
}

async function del<T>(endpoint: string): Promise<AxiosResponse<T>> {
  return axios.delete(serverUrl + endpoint, {
    headers: {
      Authorization: TMP_TOKEN
      // Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

const API = {
  TMP_TOKEN,
  serverUrl,
  get,
  post,
  formPost,
  put,
  patch,
  formPatch,
  formPut,
  delete: del
};

export { TMP_TOKEN, serverUrl, get, post, formPost, put, patch, formPatch, formPut, del as delete };
export default API;
