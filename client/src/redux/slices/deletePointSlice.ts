import { createSlice } from "@reduxjs/toolkit";
import type { PointType } from "../../types/PointType";
import deletePointThunk from "../thunkActions/deletePointThunk";

const initialState: { points: PointType[]; point: null | PointType; isLoading: boolean; error: string | undefined } = {
    points: [],
    point: null,
    isLoading: false,
    error: '',
  };

export const deletePointSlice = createSlice({
    name:'point',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(deletePointThunk.fulfilled, (state, action) => {
            state.points = state.points.filter((el) => el.id !== action.payload);
          });
    }
})

export default deletePointSlice.reducer;