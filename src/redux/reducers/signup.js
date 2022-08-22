import { createSlice } from '@reduxjs/toolkit';
import { STATE } from '../../constants';
import signupThunk from '../thunks';

const initialState = STATE;

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  extraReducers: builder => {
    builder.addCase(signupThunk.pending, state => {
      state.status = 'loading';
    }),
      builder.addCase(
        signupThunk.fulfilled,
        (state, { payload }) => {
          state.payload = payload.data;
          state.status = 'success';
        }
      ),
      builder.addCase(signupThunk.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error;
      });
  }
});

export default signupSlice.reducer;
