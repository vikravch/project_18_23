// SortSlice.ts
import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

export interface SortSliceState {
    sortType: string;
}

const sortSlice = createSlice<SortSliceState, SliceCaseReducers<SortSliceState>>({
    name: 'articleSort',
    initialState: {
        sortType: '',
    },
    reducers: {
        sortType(state, action: PayloadAction<string>) {
            state.sortType = action.payload;
        },
    },
});

export default sortSlice.reducer;
export const { sortType } = sortSlice.actions;
