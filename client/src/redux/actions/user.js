import axios from "axios";
import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_ERROR,
  BASKET_ADD_FAIL,
  BASKET_ADD_SUCCESS,
  GET_BASKET_ADD,
  GET_BASKET_FAIL,
  INCREMENT_QTE_SUCCESS,
  INCREMENT_QTE_FAIL,
  DECREMENT_QTE_SUCCESS,
  DECREMENT_QTE_AFIL,
  DELETE_BASKET_SUCCESS,
  DELETE_BASKET_FAIL,
  UPDATE_SEND_SUCCESS,
  UPDATE_SEND_FAIL,
} from "./types";

export const getProfileUser = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  axios
    .get("/user/profile", config)
    .then((res) =>
      dispatch({
        type: USER_PROFILE_SUCCESS,
        // payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: USER_PROFILE_ERROR,
        payload: { error: err },
      });
    });
};

export const addToBasket = (
  idBook,
  titleBook,
  qte,
  idUser,
  emailUser,
  priceBook,
  total
) => async (dispatch) => {
  try {
    const res = await axios.post("/basket", {
      idBook,
      titleBook,
      qte,
      idUser,
      emailUser,
      priceBook,
      total,
      done: false
    });
    
    dispatch({
      type: BASKET_ADD_SUCCESS,
      payload: "success basket",
    });
  } catch (error) {
    console.log("error redux:", error);
    dispatch({
      type: BASKET_ADD_FAIL,
      payload: error,
    });
  }
};

export const getBasket = (idUser) => async (dispatch) => {
  console.log("idUserlllllll", { idUser });
  try {
    const res = await axios.get(`/get-basket/${idUser}`);
    dispatch({
      type: GET_BASKET_ADD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_BASKET_FAIL,
      payload: error,
    });
  }
};

export const deleteBasket = (id) => async (dispatch) => {
  console.log("id deleteeee", id);
  try {
    const res = await axios.delete(`/delete-basket/${id}`);
    dispatch({
      type: DELETE_BASKET_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log("error catch", error);
    dispatch({
      type: DELETE_BASKET_FAIL,
      payload: error,
    });
  }
};

export const increment = (idBook) => (dispatch) => {
  try {
    dispatch({
      type: INCREMENT_QTE_SUCCESS,
      idBook,
    });
  } catch (error) {
    dispatch({
      type: INCREMENT_QTE_FAIL,
      payload: error,
    });
  }
};

export const decrement = (idBook) => (dispatch) => {
  try {
    dispatch({
      type: DECREMENT_QTE_SUCCESS,
      idBook,
    });
  } catch (error) {
    dispatch({
      type: DECREMENT_QTE_AFIL,
      payload: error,
    });
  }
};

export const deleteAndSendBasket = (id) => async (dispatch) => {
  console.log('id stateAuth', id)
  try {
    const res = await axios.delete(`/delete-all-basket/${id}`);
    dispatch({
      type: UPDATE_SEND_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SEND_FAIL,
      payload: error,
    });
  }
};
