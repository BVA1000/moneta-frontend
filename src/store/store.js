import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postsSlice";

const store = configureStore({
  reducer: {
    post: postsReducer,
  },
});

export default store;
