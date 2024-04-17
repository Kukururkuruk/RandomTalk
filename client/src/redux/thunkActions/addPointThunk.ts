import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddFormPointType, BanType, RatingType } from '../../types/PointType';
import addPointService from '../../services/addPointService';
import ratingService from '../../services/ratingService';

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

export const getBansThunk = createAsyncThunk<BanType[]>('points/getBans', async () => {
  const result = await addPointService.getBans();
  return result;
});


export const ratingPointThunk = createAsyncThunk('point/rating', async (formData: RatingType) => {
  const result = await ratingService.ratingPoint(formData);
  return result;
});
export const editRatingPointThunk = createAsyncThunk('point/editRating', async (id: RatingType['id']) => {
  const resul = await ratingService.editRating(id);
  return resul;
});