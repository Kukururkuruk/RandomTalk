import { createSlice } from "@reduxjs/toolkit";
import { HistoryInitState, HistoryType } from "../../types/historyType";
import { addHistoryThunk, fetchHistoryThunk} from "../thunkActions/historyThunk";

const initialState: HistoryInitState  = {
    histories: [],
    isLoading:false,
    error: '',
}

export const addHistorySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addHistoryThunk.fulfilled, (state, action) => {
                state.histories.push(action.payload);
            })
            .addCase(fetchHistoryThunk.fulfilled, (state, action) => {
                state.histories = action.payload
            })
    }
});

export default addHistorySlice.reducer;
