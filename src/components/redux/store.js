// import { createStore, applyMiddleware } from "redux";
// import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  rootReducer,
  //   applyMiddleware(thunk),
  loadFromLocalStorage()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
