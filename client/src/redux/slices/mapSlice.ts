import { createSlice } from '@reduxjs/toolkit';
import type { MapInitState } from '../../types/PointType';
import { getPointsThunk, getUsersThunk } from '../thunkActions/mapThunkAction';
import { banPointThunk, getBansThunk } from '../thunkActions/addPointThunk';

const initialState: MapInitState = {
  points: [],
  bans: [],
  allUsers: [],
  isLoading: false,
  error: '',
};

const mapSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBansThunk.fulfilled, (state, action) => {
      if (state.bans) {
        state.bans = action.payload;
        console.log(state.bans);
      }
    });

    builder.addCase(banPointThunk.fulfilled, (state, action) => {
      if (state.bans) {
        state.bans = [action.payload, ...state.bans];

      }
    });

    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    });

    builder
      .addCase(getPointsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPointsThunk.fulfilled, (state, action) => {
        state.points = action.payload;
        state.isLoading = false;
      })
      .addCase(getPointsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default mapSlice.reducer;
