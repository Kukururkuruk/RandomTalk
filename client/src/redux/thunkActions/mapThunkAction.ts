import { createAsyncThunk } from '@reduxjs/toolkit';
import type { PointType } from '../../types/PointType';
import mapService from '../../services/mapService';
import ratingService from '../../services/ratingService';
import type { UserType } from '../../types/authType';

export const getPointsThunk = createAsyncThunk<PointType[]>('points/getPoints', async () => {
  const result = await mapService.getPoints();
  return result;
});

export const getUsersThunk = createAsyncThunk<UserType[]>('auth/getUsers', async () => {
  const result = await ratingService.getUsers();
  return result;
});
