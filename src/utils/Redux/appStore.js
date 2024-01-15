// this is the redux store here
// this place is going to
// all the out state data in form of slices

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;
