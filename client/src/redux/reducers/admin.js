import {
  ADMIN_DASHBOARD_SUCCESS,
  ADMIN_DASHBOARD_ERROR,
} from "../actions/types";

const initialState = {
  // token: localStorage.getItem("token"),
  isAuth: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADMIN_DASHBOARD_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: payload,
      };
    case ADMIN_DASHBOARD_ERROR:
      return {
        ...state,
        ...payload,
        isAuth: false,
      };
    default:
      return state;
  }
}
