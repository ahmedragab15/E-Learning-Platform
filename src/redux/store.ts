import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cart/cartSlice";

const Store = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

export default Store;
export type AppStore = ReturnType<typeof Store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
