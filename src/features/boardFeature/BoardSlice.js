import { createSlice } from "@reduxjs/toolkit";

export const feature1Slice = createSlice({
 name: "feature1",
 initialState: { value: [] },
 reducers: {
   setValue: (state, action) => {
     state.value = action.payload;
   },
 },
});

export const { setValue } = feature1Slice.actions;
