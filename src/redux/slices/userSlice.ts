import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  token: string | null;
  role: string | null;
  email: string | null;
  is_onboarded: number | null;
}

const initialState: UserState = {
  token: null,
  role: null,
  email: null,
  is_onboarded: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.email = action.payload.email;
      state.is_onboarded = action.payload.is_onboarded;
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.email = null;
      state.is_onboarded = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
