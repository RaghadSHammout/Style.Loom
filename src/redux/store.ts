import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import heroSlice from "./HeroTabs";
import cardsReducer from "./slice";
import CardContactReducer from "./slice/CardContact";
import navReducer from "./slices";
import testmonials from "./testmonials";
import testmonialsReducer from "./testmonials";
import faqReducer from "./questions";


export const store = configureStore({
  reducer: {
    product: productReducer,
    cards: cardsReducer,
    nav: navReducer,
    testmonials: testmonialsReducer,
    heroSlice: heroSlice,
    CardContact: CardContactReducer,
    faq: faqReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
