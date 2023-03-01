import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/config";

const initialState = {
  theaterList: [],
};

const theaterReducer = createSlice({
  name: "theaterReducer",
  initialState,
  reducers: {
    getAllTheatersAction: (state, action) => {
      state.theaterList = action.payload;
    },
  },
});

export const { getAllTheatersAction } = theaterReducer.actions;

export default theaterReducer.reducer;

export const getAllTheatersApi = () => {
  return async (dispatch) => {
    try {
      const result = await http.get("/QuanLyRap/LayThongTinHeThongRap");
      dispatch(getAllTheatersAction(result.data.content));
    } catch (error) {
      console.log(error);
    }
  };
};
