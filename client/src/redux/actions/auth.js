import axios from "axios";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  USER_LOAD,
  USER_LOAD_FAIL,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
} from "./types";

//get auth user
export const loadUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    const res = await axios.get("/current", config);

    dispatch({
      type: USER_LOAD,
      payload: res.data,
      role: res.data.role,
    });
  } catch (err) {
    // const errors = err.response.data;
    dispatch({
      type: USER_LOAD_FAIL,
      // data: { error: "Something went wrong" },
      data: err,
    });
    console.log(err);
  }
};

// Register person
export const signup = (payloadState) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ ...payloadState });
  try {
    const res = await axios.post("/signup", body, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
      role: res.data.person.role,
    });
    // localStorage.setItem("token", res.data.personToken);
  } catch (err) {
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

// login person
export const loginUser = (loginData) => async (dispatch) => {
  try {
    const res = await axios.post("/login", loginData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
      role: res.data.role,
    });

    // localStorage.setItem("token", res.data.authToken);
  } catch (err) {
    const errors = err.response.data;
    dispatch({
      type: LOGIN_ERROR,
      // data: { error: "Something went wrong" },
      data: errors,
    });
  }
};

// logout person
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {}
};

export const updateProfileAuthor = (person) => async (dispatch) => {
  //detailProfile : state
  try {
    const res = await axios.put(`/profileAuthor/update/${person.id}`, person);
    console.log("res.data", res.data);
    dispatch({
      type: UPDATE_SUCCESS,
      payload: res.data,
    });
    console.log("res.data", res.data);
  } catch (error) {
    dispatch({
      type: UPDATE_ERROR,
      payload: error,
    });
  }
};
