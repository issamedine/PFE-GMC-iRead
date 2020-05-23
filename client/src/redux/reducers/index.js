import { combineReducers } from "redux";
import auth from "./auth";
import admin from "./admin";
import author from "./author";
import user from "./user";
import chat from "./chat";

export default combineReducers({
  auth,
  admin,
  author,
  user, 
  chat
});

// const reminders = (state = [], action) => {
//   if (action.type === LOGIN) {
//     state = [];
//     return state;
//   } else {
//     return state;
//   }
// };
