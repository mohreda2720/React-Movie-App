import { legacy_createStore as createStore } from "redux";
import favReducer from "./reducer/reducer";

const store = createStore(favReducer)

export default store