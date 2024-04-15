import { createSlice } from '@reduxjs/toolkit'
import { AccessType } from '../../types/AccessType';
import { createAccessThunk, getAppliedPointsThunk, statusAccessThunk } from '../thunkActions/accessThunk';
import { PointType } from '../../types/PointType';

const initialState: {accesses: AccessType[]; access: null | AccessType; accessed: PointType[]} = {
    accesses: [],
    access: null,
}

const accessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
      builder.addCase(createAccessThunk.fulfilled, (state, action) => {
        state.accesses.unshift(action.payload)
      })

      builder.addCase(statusAccessThunk.fulfilled, (state) => {
        state.access.status = true;
      })

  },
});

export const {} = accessSlice.actions

export default accessSlice.reducer