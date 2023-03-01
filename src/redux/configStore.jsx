import { configureStore } from "@reduxjs/toolkit";
import theaterReducer from "./reducers/theaterReducer";

export const store = configureStore({
  reducer: {
    theaterReducer: theaterReducer,
  },
});
