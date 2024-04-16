import { createAsyncThunk } from '@reduxjs/toolkit';
import getClientService from '../../services/getClientService';

const getClientThunk = createAsyncThunk('client/getClient', async (clientId : number) => {
    const result = await getClientService.getClient(clientId);
    return result;
  });

export default getClientThunk;
