import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default storage (localStorage)
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { userslice } from "./slices/userslice";
import { categoryslice } from "./slices/categoryslice";
import { supportslice } from "./slices/supportslice";
import { orderslice } from "./slices/orderslice";
import { withdrawslice } from "./slices/withdrawslice";
import { organizerslice } from "./slices/organizerslice";
import { eventslice } from "./slices/eventslice";
import { searchslice } from "./slices/searchslice";

// Import your slice correctly

// Combine all reducers
const rootReducer = combineReducers({
  user: userslice.reducer,
  category: categoryslice.reducer,
  support: supportslice.reducer,
  order: orderslice.reducer,
  withdraw: withdrawslice.reducer,
  organizer: organizerslice.reducer,
  event: eventslice.reducer,
  search : searchslice.reducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
