import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/index';
import cardsReducer from './slice/index'
export const store = configureStore({
 reducer: {
   cards: cardsReducer,
    nav: navReducer,
  },
  },
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
