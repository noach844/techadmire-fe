import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  username: string;
  firstname: string;
  lastname: string;
  id: number;
}
interface IUserState {
  value: null | IUser;
}
const initialState: IUserState | null = { value: null };

export const userSlice = createSlice({
  name: 'user',

  initialState,
  reducers: {
    logoutUser: (state) => {
      state.value = null;
    },

    setUser: (state, action: PayloadAction<IUserState>) => {
      state.value = action.payload;
    },
  },
});

export const { logoutUser, setUser } = userSlice.actions;

export default userSlice.reducer;
