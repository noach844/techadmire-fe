import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/slices/tokenSlice';
import { loginAPI, reg, registerAPI } from '../api/authAPI';
import moment from 'moment-timezone';
import { IRegisterPayload } from './../api/authAPI';

export function useAuth() {
  const dispatch = useDispatch();

  const signin = async (username: string, password: string) => {
    const resToken = await loginAPI({ username, password });
    Cookies.set('token', resToken.token, {
      expires: moment(
        resToken.expiration + 'Z',
        'ddd MMM DD HH:mm:ss zzz YYYYZ'
      ).toDate(),
    });
    dispatch(login(resToken.token));
  };

  const signout = () => {
    dispatch(logout());
    Cookies.remove('token');
  };

  const signup = async ({
    username,
    firstname,
    lastname,
    password,
  }: IRegisterPayload) => {
    await registerAPI({
      username,
      lastname,
      firstname,
      password,
    });
  };

  return {
    signin,
    signup,
    signout,
  };
}
