import { createSlice } from "@reduxjs/toolkit";
import type { PointType } from "../../types/PointType";
import { addPointThunk } from "../thunkActions/addPointThunk";


const initialState: { points: PointType[]; point: null | PointType; isLoading: boolean; error: string | undefined } = {
    points: [],
    point: null,
    isLoading: false,
    error: '',
  };

export const addPointSlice = createSlice({
    name:'point',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addPointThunk.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(addPointThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.points = [action.payload, ...state.points];
          });
    }
})

export default addPointSlice.reducer;