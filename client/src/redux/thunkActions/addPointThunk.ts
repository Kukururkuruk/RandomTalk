import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddFormPointType, BanType } from '../../types/PointType';
import addPointService from '../../services/addPointService';

export const addPointThunk = createAsyncThunk(
  'points/addThunk',
  async (formData: AddFormPointType) => {
    const result = await addPointService.addPoint(formData);
    return result;
  },
);

export const banPointThunk = createAsyncThunk('point/ban', async (formData: BanType) => {
  const result = await addPointService.banPoint(formData);
  return result;
});
