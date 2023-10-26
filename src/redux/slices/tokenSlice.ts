import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IState {
  value: string | null;
}

const initialState: IState = { value: null };

export const tokenSlice = createSlice({
  name: 'token',

  initialState,
  reducers: {
    logout: (state) => {
      state.value = null;
    },

    login: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { login, logout } = tokenSlice.actions;

export default tokenSlice.reducer;
