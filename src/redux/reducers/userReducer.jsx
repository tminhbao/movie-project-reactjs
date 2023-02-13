import { createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../../constants";
import { http } from "../../utils/config";

const initialState = {
  userTypes: [],
  userLogin: JSON.parse(localStorage.getItem(USER_LOGIN)) || null,
  userProfile: null,
  loading: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getAllUserTypesAction: (state, action) => {
      state.userTypes = action.payload;
    },
    loginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    registerAction: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { getAllUserTypesAction, loginAction, registerAction } =
  userReducer.actions;

export default userReducer.reducer;

export const getAllUserTypesApi = (callback) => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`
      );
      dispatch(getAllUserTypesAction(result.data.content));
      if (callback) callback();
    } catch (error) {
      console.error(error);
    }
  };
};

export const loginApi = (data, callback) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/QuanLyNguoiDung/DangNhap`, data);
      dispatch(loginAction(result.data.content));
      if (callback) callback();
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerApi = (data, callback) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/QuanLyNguoiDung/DangKy`, data);
      dispatch(registerAction(result.data.content));
      if (callback) callback();
    } catch (error) {
      console.log(error);
    }
  };
};
