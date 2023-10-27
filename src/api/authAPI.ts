import { AxiosResponse } from 'axios';
import { createHTTPClient } from './httpClient';

interface LoginPayload {
  username: string;
  password: string;
}

interface ILoginResponse {
  accessToken: string;
  tokenType: string;
  expiration: string;
}

export interface IRegisterPayload {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
}

const authURL = `${import.meta.env.VITE_SERVER_URL}/auth`;
const authClient = createHTTPClient(authURL);

const loginAPI = async (payload: LoginPayload) => {
  const res: AxiosResponse<ILoginResponse> = await authClient.post(
    '/login',
    payload
  );

  return {
    token: `${res.data.tokenType} ${res.data.accessToken}`,
    expiration: res.data.expiration,
  };
};

const registerAPI = async (payload: IRegisterPayload) => {
  try {
    await authClient.post('/register', payload);
  } catch (err) {
    console.log(err);
  }
};

export { loginAPI, registerAPI, getUserDetials };
