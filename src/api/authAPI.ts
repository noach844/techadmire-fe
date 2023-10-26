import { AxiosResponse } from 'axios';
import { createHTTPClient } from './httpClient';

interface loginPayload {
  username: string;
  password: string;
}

interface loginResponse {
  accessToken: string;
  tokenType: string;
  expiration: string;
}

interface registerPayload {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}

const authURL = `${import.meta.env.VITE_SERVER_URL}/auth`;
const authClient = createHTTPClient(authURL);

const loginAPI = async (payload: loginPayload) => {
  const res: AxiosResponse<loginResponse> = await authClient.post(
    '/login',
    payload
  );

  return {
    token: `${res.data.tokenType} ${res.data.accessToken}`,
    expiration: res.data.expiration,
  };
};

const register = async (payload: registerPayload) => {
  try {
    await authClient.post('/register', payload);
  } catch (err) {
    console.log(err);
  }
};

const getUserDetials = async (token: string) => {
  return (
    await authClient.get('/user-details', { headers: { Authorization: token } })
  ).data;
};

export { loginAPI, register, getUserDetials };
