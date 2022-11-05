import { configureStore } from "@reduxjs/toolkit";
import langReducers from "./langSlice";

const store = configureStore({
  reducer: {
    lang: langReducers,
  },
});

export default store;
