import { createStore } from "redux";
import { dataReducer } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  data: dataReducer,
});

const store = createStore(rootReducer);

export default store;
