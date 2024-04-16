import { createSlice } from '@reduxjs/toolkit';
import type { AuthStateType, UserType } from '../../types/authType';
import { checkTokenThunk, logOutThunk, signInThunk, signUpThunk } from '../thunkActions/authThunkActions';
import getClientThunk from '../thunkActions/getClientThunk';

const initialState: UserType = {
    id: 0,
    username: '',
    email: '',
    rating: 0,
};

const authSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClientThunk.fulfilled, (state, action) => {
        const {id, username, email, rating} = action.payload
        state.id = id
        state.username = username
        state.email = email
        state.rating = rating
    })
  },
});

export default authSlice.reducer;
