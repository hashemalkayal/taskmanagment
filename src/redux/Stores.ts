import { legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from "./root/Root";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const reduxStore = createStore(persistedReducer);
export const persistor = persistStore(reduxStore);

export type IROOTSTATE = ReturnType<typeof reduxStore.getState>;
