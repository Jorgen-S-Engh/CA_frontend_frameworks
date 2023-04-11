// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchasedItems: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPurchasedItems: (state, action) => {
      state.purchasedItems = action.payload;
    },
  },
});

export const { setPurchasedItems } = orderSlice.actions;
export default orderSlice.reducer;
