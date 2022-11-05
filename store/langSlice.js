import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  lang: {
    payload: "EN",
  },
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang(state, payload) {
      state.lang = payload;
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
