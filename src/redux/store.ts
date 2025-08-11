import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboardSlice"; // <-- تأكدي من المسار

import cardsReducer from "./slice/index";
import navReducer from "./slices/index";
import testmonialsReducer from "./testmonials/index";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    cards: cardsReducer,
    nav: navReducer,
    testmonials: testmonialsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
