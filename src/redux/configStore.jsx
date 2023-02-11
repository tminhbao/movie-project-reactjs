import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "./reducers/bookingTicketReducer";
import movieReducer from "./reducers/movieReducer";
import theaterReducer from "./reducers/theaterReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    bookingTicketReducer: bookingTicketReducer,
    movieReducer: movieReducer,
    theaterReducer: theaterReducer,
  },
});
