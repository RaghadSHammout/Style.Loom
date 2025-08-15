import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productSlice";
import dashboardReducer from "./slices/dashboardSlice";
import heroSlice from "./HeroTabs";

import cardsReducer from "./slice";
import navReducer from "./slices";
import testmonialsReducer from "./testmonials";

export const store = configureStore({
  reducer: {
    product: productReducer,
    dashboard: dashboardReducer,
    cards: cardsReducer,
    nav: navReducer,
    testmonials: testmonialsReducer,
    heroSlice: heroSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
