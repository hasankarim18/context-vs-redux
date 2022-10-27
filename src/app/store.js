import { configureStore } from "@reduxjs/toolkit";
import prosconsReducer from "../features/prosConsSlice";

export const store = configureStore({
    reducer: {
        proscons: prosconsReducer,
    },
});
