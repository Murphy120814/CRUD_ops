import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "../slices/userInfoSlice";
const store = configureStore({
  reducer: {
    user: userInfoSlice,
  },
});

export default store;
