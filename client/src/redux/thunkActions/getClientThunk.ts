import { createAsyncThunk } from '@reduxjs/toolkit';
import getClientService from '../../services/getClientService';

const getClientThunk = createAsyncThunk('client/getClient', async (clientId : number) => {
    try {
      const result = await getClientService.getClient(clientId);
      return result;
    } catch (error) {
      console.error('Error fetching client:', error);
    }
  });

export default getClientThunk;
