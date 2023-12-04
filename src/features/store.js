// store.js
import { configureStore } from "@reduxjs/toolkit";
import { feature1Slice } from "./boardFeature/BoardSlice";

export const store = configureStore({
 reducer: {
   feature1: feature1Slice.reducer,
 },
 devTools: true,
});
