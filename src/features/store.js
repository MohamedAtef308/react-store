import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import userSlice from "./user/userSlice";



export const store = configureStore(
    {
        reducer: {
        cart: cartSlice,
        user: userSlice
        }
    }
)