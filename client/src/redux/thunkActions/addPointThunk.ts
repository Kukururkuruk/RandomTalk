import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AddFormPointType } from '../../types/PointType';
import addPointService from '../../services/addPointService';

const addPointThunk = createAsyncThunk(
    'points/addThunk',
    async (formData: AddFormPointType) => {
      const result = await addPointService.addPoint(formData);
      return result;
    },
  );

export default addPointThunk;