import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducers/jobsReducer";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export default store;
