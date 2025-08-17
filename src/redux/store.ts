import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productSlice";
import dashboardReducer from "./slices/dashboardSlice";

import cardsReducer from "./slice";
import navReducer from "./slices";
import testmonials from "./testmonials";
import faqReducer from "./questions";

export const store = configureStore({
  reducer: {
    product: productReducer,
    dashboard: dashboardReducer,
    cards: cardsReducer,
    nav: navReducer,
    testmonials: testmonials,
    faq: faqReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
