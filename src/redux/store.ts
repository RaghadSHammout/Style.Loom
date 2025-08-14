import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productSlice";        

import cardsReducer from "./slice";                        
import navReducer from "./slices";                         
import testmonialsReducer from "./testmonials";            

export const store = configureStore({
  reducer: {
    product: productReducer,       
    cards: cardsReducer,
    nav: navReducer,
    testmonials: testmonialsReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;