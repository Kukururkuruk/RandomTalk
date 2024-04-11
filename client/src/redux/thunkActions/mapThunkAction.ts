import { createAsyncThunk } from '@reduxjs/toolkit';
import type { PointType } from '../../types/PointType';
import mapService from '../../services/mapService';

export const getPointsThunk = createAsyncThunk<PointType[]>('points/getPoints', async () => {
  const result = await mapService.getPoints();
  return result;
});
