import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_ERROR,
  BASKET_ADD_SUCCESS,
  BASKET_ADD_FAIL,
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
} from "../actions/types";

const initialState = {
  isUser: false,
  basket: [],
};

export default function (state = initialState, action) {
  const { type, payload, idBook } = action;
  switch (type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        isUser: true,
        user: payload,
      };
    case USER_PROFILE_ERROR:
      return {
        ...state,
        ...payload,
        isUser: false,
        userLoading: true,
      };

    case BASKET_ADD_SUCCESS:
      return {
        ...state,
        payload,
      };
    case BASKET_ADD_FAIL:
      return {
        ...state,
        payload,
      };
    case GET_BASKET_ADD:
      return {
        ...state,
        basket: payload,
      };
    case GET_BASKET_FAIL:
      return {
        ...state,
        payload,
      };
    case INCREMENT_QTE_SUCCESS:
      return {
        ...state,
        // basket: state.basket.map((el) => {
        //   if (el._id === id) el.qte++;
        //   return el;
        // )}
        basket: state.basket.map((el) =>
          el._id === idBook
            ? { ...el, qte: el.qte + 1, total: el.priceBook * (el.qte + 1) }
            : el
        ),
      };
    case INCREMENT_QTE_FAIL:
      return {
        ...state,
        payload,
      };
    case DECREMENT_QTE_SUCCESS:
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.qte > 0 && el._id === idBook
            ? { ...el, qte: el.qte - 1, total: el.priceBook * (el.qte - 1) }
            : el
        ),
      };
    case DECREMENT_QTE_AFIL:
      return {
        ...state,
        payload,
      };
    case DELETE_BASKET_SUCCESS:
      return {
        ...state,
        basket: payload,
      };
    case DELETE_BASKET_FAIL:
      return {
        ...state,
        payload,
      };
    case UPDATE_SEND_SUCCESS:
      return {
        ...state,
       basket: payload,
      };
    case UPDATE_SEND_FAIL:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}
