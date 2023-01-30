import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resultItems: [],
    correctOrNot: [],
};

export const resultSlice = createSlice({
    name: "resultSlice",
    initialState,
    reducers: {
        addNewResult: (state, action) => {
            state.resultItems.push(action.payload);
        },
        addAnsvers: (state, action) => {
            state.correctOrNot.push(action.payload);
        },
    },
});

export const { addNewResult, addAnsvers } = resultSlice.actions;

export default resultSlice.reducer;
