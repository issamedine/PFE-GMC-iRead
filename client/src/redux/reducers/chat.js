import { GET_CHAT_SUCCESS, GET_CHAT_FAIL, AFETR_POST_MESSAGE } from "../actions/types";

const initialState = {
  chats: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CHAT_SUCCESS:
      return {
          ...state,
          chats: payload
      };
    case GET_CHAT_FAIL:
      return {};
    case AFETR_POST_MESSAGE:
      return {
        ...state,
        chats: state.chats.concat(payload)
      }
    default:
      return state;
  }
}
