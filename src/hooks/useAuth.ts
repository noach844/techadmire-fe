import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/slices/tokenSlice';
import { loginAPI } from '../api/authAPI';
import moment from 'moment-timezone';

export function useAuth() {
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const cookieToken = Cookies.get('token');
    cookieToken ? dispatch(login(cookieToken)) : null;
  });

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

  return {
    token,
    signin,
    signout,
  };
}
