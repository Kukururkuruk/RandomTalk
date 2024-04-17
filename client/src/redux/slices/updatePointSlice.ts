import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { updateAgreePointThunk, updateClientPointThunk, updateStatusPointThunk } from '../thunkActions/updatePointThunk';
import { PointType } from '../../types/PointType';

const initialState: PointType = {
    id: 0,
    theme: '',
    cloth: '',
    longitude: '',
    latitude: '',
    status: false,
    userId: 0,
    agreed: true,
    clientId: 0,
    reason: '',
}

const updatePointSlice = createSlice({
    name: 'point',
    initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(updateStatusPointThunk.fulfilled, (state) => {
        state.status = true
    })
    .addCase(updateClientPointThunk.fulfilled, (state, action) => {
        state.clientId = action.payload.clientId
        state.reason = action.payload.reason
    })
    .addCase(updateAgreePointThunk.fulfilled, (state) => {
        state.agreed = true
    })
    }})


export const {} = updatePointSlice.actions

export default updatePointSlice.reducer