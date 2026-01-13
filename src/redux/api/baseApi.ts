import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  token: string | null;
  user: any | null;
};

const initialState: UserState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string; user?: any }>) => {
      state.token = action.payload.token;
      if (action.payload.user) state.user = action.payload.user;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload.token);
      }
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setAuth, clearAuth } = userSlice.actions;
export default userSlice.reducer;
