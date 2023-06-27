import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  cartState: cartReducer,
});

export default rootReducer;
