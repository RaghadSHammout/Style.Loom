import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from "./slices/dashboardSlice"; 

import cardsReducer from './slice/index';
import navReducer from './slices/index';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer, 
    cards: cardsReducer,
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
