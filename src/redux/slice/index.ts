import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CardOneItem = {
  id: string;
  img: string;
  img2?: string;
  title: string;
  description: string;
  createdAt?: any;
};

type CardsState = {
  cardone: CardOneItem[];
  cardtwo: { steps: string; title: string; description: string }[];
  cardthree: { img: string; title: string; description: string }[];
};

const initialState: CardsState = {
  cardone: [],

  cardtwo: [
    { steps: "Step 01", title: "Discover Trends", description: "Explore our curated collection of over 1000 styles, spanning global fashion trends." },
    { steps: "Step 02", title: "Effortless Navigation", description: "Intuitive filters and categories help you find the perfect pieces tailored to your style." },
    { steps: "Step 03", title: "Secure Checkout", description: "Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase." },
    { steps: "Step 04", title: "Unbox Happiness", description: "Unbox a fashion-forward experience delivered right to your door, ready to elevate your style." },
  ],

  cardthree: [
    { img: "some-img", title: "Eligibility", description: "Items must be unused, with tags attached." },
    { img: "some-img", title: "Process", description: "Initiate returns through our Return Center for a smooth process." },
    { img: "some-img", title: "Refund", description: "Expect a refund to your original payment method within 7-10 days." },
    { img: "some-img", title: "Cancellation Window", description: "Orders can be canceled within 24 hours of placement for a full refund." },
    { img: "some-img", title: "Cancellation Process", description: "Visit our Order Management section to cancel your order effortlessly." },
    { img: "some-img", title: "Refund Timeline", description: "Refunds for canceled orders are processed within 5-7 business days." },
  ],
};

const InfoCards = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardOne(state, action: PayloadAction<CardOneItem[]>) {
      state.cardone = action.payload;
    },

    addCardOne(state, action: PayloadAction<CardOneItem>) {
      state.cardone.push(action.payload);
    },
    updateCardOne(state, action: PayloadAction<{ index: number; data: CardOneItem }>) {
      state.cardone[action.payload.index] = action.payload.data;
    },
    deleteCardOne(state, action: PayloadAction<number>) {
      state.cardone.splice(action.payload, 1);
    },
  },
});

export const { setCardOne, addCardOne, updateCardOne, deleteCardOne } = InfoCards.actions;
export default InfoCards.reducer;
