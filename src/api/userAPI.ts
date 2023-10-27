import { AxiosResponse } from 'axios';
import { createHTTPClient } from './httpClient';

export interface IUserResponse {
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  id: number;
}

const authURL = `${import.meta.env.VITE_SERVER_URL}/auth`;
const authClient = createHTTPClient(authURL);

const getUserDetails = async (token: string) => {
  const res: AxiosResponse<IUserResponse> = await authClient.get(
    '/user-details',
    { headers: { Authorization: token } }
  );

  return res.data;
};

export { getUserDetails };
