import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import { EditPointState } from '../../types/editType';
import updateStatusPointThunk from '../thunkActions/updatePointThunk';
import { PointType } from '../../types/PointType';

const initialState: PointType = {
    id: 0,
    theme: '',
    cloth: '',
    longitude: '',
    latitude: '',
    status: false,
    userId: 0,
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
    }})


export const {} = updatePointSlice.actions

export default updatePointSlice.reducer