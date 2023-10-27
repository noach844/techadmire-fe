import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/slices/tokenSlice';
import { logoutUser, setUser } from '../redux/slices/userSlice';
import { loginAPI, registerAPI } from '../api/authAPI';
import { getUserDetails } from '../api/userAPI';
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
    await dispatch(login(resToken.token));
    loadUserDetails(resToken.token);
  };

  const signout = () => {
    dispatch(logout());
    dispatch(logoutUser());
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

  const loadUserDetails = async (token: string) => {
    const resUser = await getUserDetails(token);
    dispatch(setUser(resUser));
  };

  return {
    signin,
    signup,
    signout,
    loadUserDetails,
  };
}
