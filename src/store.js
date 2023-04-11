import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import ordersReducer from "./features/order/orderSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
  },
});
