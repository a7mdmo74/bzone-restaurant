import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart/cartSlice";
import dishesReducer from "./features/dishes/dishesSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducer,
  },
});
