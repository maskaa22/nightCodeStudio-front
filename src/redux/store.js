import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { statisticsReducer } from "./statistics/slice";

const persistConfig = {
  key: "auth-data",
  version: 1,
  storage,
  // blacklist: ["filters"],
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    statistics: persistReducer(persistConfig, statisticsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: false,
  // devTools: stage === 'development' ? true: false,
  // devTools: stage === 'development',
});

export const persistor = persistStore(store);
