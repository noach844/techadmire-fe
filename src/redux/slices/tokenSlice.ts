import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface IState {
  value: string | undefined;
}

const initialState: IState = { value: Cookies.get('token') };

export const tokenSlice = createSlice({
  name: 'token',

  initialState,
  reducers: {
    logout: (state) => {
      state.value = undefined;
    },

    login: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { login, logout } = tokenSlice.actions;

export default tokenSlice.reducer;
