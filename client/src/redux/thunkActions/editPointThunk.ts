import { createAsyncThunk } from '@reduxjs/toolkit';
import editPointService from '../../services/editPointService';

const editPointThunk = createAsyncThunk('point/editPoint', async (formData) => {
    const result = await editPointService.editPoint(formData);
    return result;
  });

export default editPointThunk;
