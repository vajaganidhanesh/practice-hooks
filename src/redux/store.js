import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./RootReducer";

export const store = createStore(rootReducer);
