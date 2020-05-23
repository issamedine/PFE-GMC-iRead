import axios from "axios";
import {
    GET_CHAT_SUCCESS,
    GET_CHAT_FAIL,
    AFETR_POST_MESSAGE
} from "./types";

// authentificate author: Dashboard & Profile
export const getChats = () => (dispatch) => {
  console.log('hello action chat')
  axios
    .get("/get-chat")
    .then((res) =>
      dispatch({
        type: GET_CHAT_SUCCESS,
        payload: res.data,
        
      }),
    )
    .catch((err) => {
      dispatch({
        type: GET_CHAT_FAIL,
        payload: { error: err },
      });
    });
};

export const afterPostMessage = (data) => dispatch => {
  dispatch({
    type: AFETR_POST_MESSAGE,
    payload: data
  })
}