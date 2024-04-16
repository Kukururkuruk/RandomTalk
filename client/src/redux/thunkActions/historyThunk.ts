import { createAsyncThunk } from '@reduxjs/toolkit';
import historyService from '../../services/historyService';

export const addHistoryThunk = createAsyncThunk(
  'history/addHistory',
  async ({ userId, clientId, pointId }: { userId: number; clientId: number; pointId: number }) => {
    try {
      const result = await historyService.addHistory(userId, clientId, pointId);
      return result;
    } catch (error) {
      console.error('Failed to add history record:', error);
      throw new Error('Failed to add history record');
    }
  }
);
