import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postsSlice";
import accountReducer from "../store/accountSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    account: accountReducer,

  },
});

export default store;
