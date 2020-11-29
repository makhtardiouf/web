
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducer: specifies how the state is changed in response to actions

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history)
  });

export default createRootReducer;
