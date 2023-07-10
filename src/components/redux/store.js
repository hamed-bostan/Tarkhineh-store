// import { createStore, applyMiddleware } from "redux";
// import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartItems", serializedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartItems");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const store = createStore(
  rootReducer,
  //   applyMiddleware(thunk),
  loadFromLocalStorage()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
