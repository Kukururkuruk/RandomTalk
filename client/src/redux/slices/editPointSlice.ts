import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PointType } from '../../types/PointType';
import type { EditPointState } from '../../types/editType';
import editPointThunk from '../thunkActions/editPointThunk';

const initialState: EditPointState = {
  points: [],
  editPoint: null,
  isLoading: false,
  error: null,
};

export const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    setEditPoint: (state, action: PayloadAction<PointType | null>) => {
      state.editPoint = action.payload;
    },
    closeEditPoint: (state) => {
      state.editPoint = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editPointThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editPointThunk.fulfilled, (state, action: PayloadAction<PointType>) => {
        const index = state.points.findIndex(point => point.id === action.payload.id);
        if (index !== -1) {
          state.points[index] = action.payload;
        }
        state.editPoint = null;
        state.isLoading = false;
      })
      .addCase(editPointThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to edit point';
      });
  },
});

export const { setEditPoint, closeEditPoint } = pointSlice.actions;
export default pointSlice.reducer;
