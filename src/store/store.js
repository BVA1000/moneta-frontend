import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/testSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
