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
} from "../actions/types";

const initialState = {
  isAuthor: false,
  books: [],
  loadingAuthor: true,
};

export default function (state = initialState, action) {
  const { type, payload, textSuccess, textFail, idBook } = action;
  switch (type) {
    case AUTHOR_DASHBOARD_SUCCESS:
      return {
        ...state,
        isAuthor: true,
        user: payload,
      };
    case AUTHOR_DASHBOARD_ERROR:
      return {
        ...state,
        isAuthor: false,
      };
    case AUTHOR_PROFILE_SUCCESS:
      return {
        ...state,
        payload,
        isAuthor: true,
      };
    case AUTHOR_PROFILE_ERROR:
      return {
        ...state,
        isAuthor: false,
      };
    case BOOK_ADDED:
      return {
        ...state,
        textSuccess,
      };
    case BOOK_ERROR:
      return {
        ...state,
        textFail,
      };
    case BOOK_LIST_SUCCESS:
      return {
        ...state,
        books: payload,
        loadingAuthor: false,
      };
    case BOOK_LIST_FAIL:
      return {
        ...state,
        error: payload,
        loadingAuthor: false,
      };
    case BOOK_DELETE_SUCCESS:
      return {
        ...state,
        books: payload,
        loadingAuthor: false,
      };
    case BOOK_DELETE_FAIL:
      return {
        ...state,
        error: payload,
        loadingAuthor: false,
      };
    case BOOK_UPDATE_SUCCESS:
      return {
        ...state,
        books: payload,
        loadingAuthor: false,
      };
    case BOOK_UPDATE_FAIL:
      return {
        ...state,
        error: payload,
        loadingAuthor: false,
      };
    case INCREMENT_LIKE_SUCCESS:
      return {
        ...state,
        // books: state.books.map(el=>el._id == idBook ? {...el, isLike: !el.isLike} : el)
      }
    default:
      return state;
  }
}
