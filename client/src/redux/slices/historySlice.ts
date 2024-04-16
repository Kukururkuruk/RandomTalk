import { createSlice } from "@reduxjs/toolkit";
import { HistoryType } from "../../types/historyType";
import { addHistoryThunk } from "../thunkActions/historyThunk";

const initialState: HistoryType[] = [];

export const addHistorySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addHistoryThunk.fulfilled, (state, action) => {
                state.push(action.payload);
            });
    }
});

export default addHistorySlice.reducer;
