import { createSlice } from '@reduxjs/toolkit';
import type { AuthStateType } from '../../types/authType';
import { checkTokenThunk, logOutThunk, signInThunk, signUpThunk } from '../thunkActions/authThunkActions';
import { editRatingPointThunk } from '../thunkActions/addPointThunk';

const initialState: AuthStateType = {
  accessToken: '',
  user: { status: 'pending' },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkTokenThunk.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user.status = 'logged';
      state.user = { ...user, ...state.user };
    });

    builder.addCase(signInThunk.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user.status = 'logged';
      state.user = { ...user, ...state.user };
    });

    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user.status = 'logged';
      state.user = { ...user, ...state.user };
    })
    .addCase(signUpThunk.rejected, (state) => {
      state.user = { status: 'guest' };
    });

    builder.addCase(editRatingPointThunk.fulfilled, (state, action) => {
      state.user = state.user?.map((el) =>
        el.id === action.payload.id ? action.payload : el,
      );
    });

    builder.addCase(logOutThunk.fulfilled, (state) => {
      state.user = { status: 'guest' };
      state.accessToken = '';
    });

    builder.addMatcher(
      (action: { type: string }) =>
        action.type.startsWith('auth/') && action.type.endsWith('/pending'),
      (state) => {
        state.user.status = 'pending';
      },
    );

    builder.addMatcher(
      (action: { type: string }) =>
        action.type.startsWith('auth/') && action.type.endsWith('/rejected'),
      (state) => {
        state.user.status = 'guest';
      },
    );
  },
});

export default authSlice.reducer;
