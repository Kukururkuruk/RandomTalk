import { createAsyncThunk } from '@reduxjs/toolkit';
import type { PointType } from '../../types/PointType';
import deletePointService from '../../services/deletePointService';

const deletePointThunk = createAsyncThunk('points/deleteThunk', async (id: PointType['id']) => {
        await deletePointService.deletePoint(id)
        return id;
    });

export default deletePointThunk;
