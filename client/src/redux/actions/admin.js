import axios from "axios";
import { ADMIN_DASHBOARD_SUCCESS, ADMIN_DASHBOARD_ERROR } from "./types";

// authentificate admin dashboard
export const getAdmin = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  axios
    .get("/admin/dashboard", config)
    .then((res) =>
      dispatch({
        type: ADMIN_DASHBOARD_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: ADMIN_DASHBOARD_ERROR,
        payload: { error: err },
      });
    });
};
