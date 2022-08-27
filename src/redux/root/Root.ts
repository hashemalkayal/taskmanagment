import { combineReducers } from "redux";
import appReducer from "../reducer/appReducer";

export const RootReducer = combineReducers({
  App: appReducer,
});
