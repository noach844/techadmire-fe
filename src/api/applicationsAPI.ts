import { AxiosResponse } from 'axios';
import { createHTTPClient } from './httpClient';

export interface IApplication {
  fullname: string;
  university: string;
  course: string;
  id: number;
}

const authURL = `${import.meta.env.VITE_SERVER_URL}/applications`;
const authClient = createHTTPClient(authURL);

const getUserApplications = async (token: string) => {
  const res: AxiosResponse<[IApplication]> = await authClient.get('/', {
    headers: { Authorization: token },
  });

  return res.data;
};

const createApplication = async (token: string, payload: IApplication) => {
  try {
    await authClient.post('/', payload, {
      headers: { Authorization: token },
    });
  } catch (error) {
    console.log(error);
  }
};

export { getUserApplications, createApplication };
