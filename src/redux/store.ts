import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authApi";
import userSlice from "./slices/userSlice";




const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
