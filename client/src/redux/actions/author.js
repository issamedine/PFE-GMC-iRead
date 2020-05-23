import axios from "axios";
import {
  AUTHOR_DASHBOARD_ERROR,
  AUTHOR_DASHBOARD_SUCCESS,
  AUTHOR_PROFILE_SUCCESS,
  AUTHOR_PROFILE_ERROR,
  BOOK_ADDED,
  BOOK_ERROR,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  BOOK_DELETE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_FAIL,
  INCREMENT_LIKE_SUCCESS,
  INCREMENT_LIKE_FAIL
} from "./types";

// authentificate author: Dashboard & Profile
export const getAdminAuthor = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  axios
    .get("/author/dashboard", config)
    .then((res) =>
      dispatch({
        type: AUTHOR_DASHBOARD_SUCCESS,
        // payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: AUTHOR_DASHBOARD_ERROR,
        payload: { error: err },
      });
    });
};

export const getProfileAuthor = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  axios
    .get("/author/profile", config)
    .then((res) =>
      dispatch({
        type: AUTHOR_PROFILE_SUCCESS,
        // payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: AUTHOR_PROFILE_ERROR,
        payload: { error: err },
      });
    });
};

export const addBookAuthor = (book) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/books/add", book, config);
    dispatch({
      type: BOOK_ADDED,
      textSuccess: res.data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_ERROR,
      textSuccess: error,
    });
  }
};

export const getAllBooks = () => async (dispatch) => {
  try {
    const res = await axios.get("/books/list");
    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_LIST_FAIL,
      payload: error,
    });
  }
};

export const deleteBook = (idBook) => async (dispatch) => {
  console.log("idBook", idBook);
  try {
    const res = await axios.delete(`books/delete_book/${idBook}`);
    dispatch({
      type: BOOK_DELETE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_DELETE_FAIL,
      payload: error,
    });
  }
};

export const updateBook = (payload, idBook) => async (dispatch) => {
  try {
    const res = await axios.put(`books/update_book/${idBook}`, payload);
    dispatch({
      type: BOOK_UPDATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: BOOK_UPDATE_FAIL,
      payload: error,
    });
  }
};

export const incLike = (idBook) => async dispatch => {
  console.log('idBook', idBook)
  try {
    const res = await axios.put(`book-like-update/${idBook}`);
    dispatch({
      type: INCREMENT_LIKE_SUCCESS,
      idBook
    })
  } catch (error) {
    dispatch({
      type: INCREMENT_LIKE_FAIL,
      payload: error,
    });
  }
}