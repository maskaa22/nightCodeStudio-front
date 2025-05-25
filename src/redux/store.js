import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { statisticsReducer } from './statistics/slice';
import { authReducer } from './auth/slice';
import { userReducer } from './user/slice';
import { categoriesReducer } from './categories/slice';
import { transactionsReducer } from './transactions/slice';
import loaderReducer from './loader/loaderSlice';
const authPersistConfig = {
  key: 'auth',
  storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const categoriesPersistConfig = {
  key: 'categories',
  storage,
};

const transactionsPersistConfig = {
  key: 'transactions',
  storage,
};

export const store = configureStore({
  reducer: {
    statistics: statisticsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    user: persistReducer(userPersistConfig, userReducer),
    categories: persistReducer(categoriesPersistConfig, categoriesReducer),
    transactions: persistReducer(
      transactionsPersistConfig,
      transactionsReducer,
    ),
    loader: loaderReducer,
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
