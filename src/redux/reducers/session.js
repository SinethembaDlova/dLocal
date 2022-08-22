import { createSlice } from '@reduxjs/toolkit';
import { STATE } from '../../constants';
import { signinThunk, signupThunk } from '../thunks';

const initialState = STATE;

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: builder => {
    builder.addCase(signupThunk.pending, state => {
      state.status = 'signing up';
    }),
      builder.addCase(
        signupThunk.fulfilled,
        (state, { payload }) => {
          state.payload = payload;
          state.status = 'success';
        }
      ),
      builder.addCase(signupThunk.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error;
      });
    builder.addCase(signinThunk.pending, state => {
      state.status = 'signing in';
    }),
      builder.addCase(
        signinThunk.fulfilled,
        (state, { payload }) => {
          state.payload = payload;
          state.status = 'success';
        }
      ),
      builder.addCase(signinThunk.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error;
      });
  }
});

export default sessionSlice.reducer;
