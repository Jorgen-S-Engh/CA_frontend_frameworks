import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    removeAllItems: (state) => {
      state.items = [];
    },
  },
});

export const purchaseItems = () => (dispatch, getState) => {
  const items = getState().cart.items;
  dispatch(removeAllItems());
  return items;
};

export const { addItem, incrementQuantity, decrementQuantity, removeAllItems } =
  cartSlice.actions;

export default cartSlice.reducer;
