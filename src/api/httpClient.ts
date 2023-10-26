import axios from 'axios';

export const createHTTPClient = (
  baseURL: string,
  token: string | null = null
) => {
  let headers = {};
  token ? (headers = { ...headers, Authorization: `Bearer ${token}` }) : null;
  return axios.create({ baseURL: baseURL, headers: headers });
};
