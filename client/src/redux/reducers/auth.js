import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOAD,
  USER_LOAD_FAIL,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isRegister: false,
  isAuth: false,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload, role } = action;

  switch (type) {
    case USER_LOAD:
      return {
        ...state,
        ...payload,
        role,
        isRegister: true,
        loading: false,
      };
    case SIGNUP_SUCCESS:
      localStorage.setItem("token", payload.authToken);
      return {
        ...state,
        ...payload,
        role,
        isRegister: true,
        loading: false,
      };

    case SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isRegister: false,
        loading: false,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        role,
        isRegister: true,
        loading: false,
      };

    case LOGOUT:
    case USER_LOAD_FAIL:
      localStorage.removeItem("token");
      return {
        ...initialState,
        loading: false,
      };

    case UPDATE_SUCCESS:
      return {
        ...state,
        loadingAuthor: false,
        person: payload,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        loadingAuthor: false,
      };
    default:
      return state;
  }
}
