import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  firstname: string;
  lastname: string;
  token: string;
}

const initialState: UserState | null = null;

export const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    logout: (state) => {
      state.value = null;
    },

    login: (state, action: PayloadAction<UserState>) => {
      state.value = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
