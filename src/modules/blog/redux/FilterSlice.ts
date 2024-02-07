// FilterSlice.ts
import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

export interface FilterSliceState {
    ourStyle: string;
}

const filterSlice = createSlice<FilterSliceState, SliceCaseReducers<FilterSliceState>>({
    name: 'filterStyle',
    initialState: {
        ourStyle: "all",
    },
    reducers: {
        selectFilter(state, action: PayloadAction<string>) {
            state.ourStyle = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { selectFilter } = filterSlice.actions;
