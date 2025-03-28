import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});

export default store;
