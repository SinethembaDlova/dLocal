import { createSlice } from '@reduxjs/toolkit';
import { STATE } from '../../constants';
import signinThunk from '../thunks';

const initialState = STATE;

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  extraReducers: builder => {
    builder.addCase(signinThunk.pending, state => {
      state.status = 'loading';
    }),
      builder.addCase(
        signinThunk.fulfilled,
        (state, { payload }) => {
          state.payload = payload.data;
          state.status = 'success';
        }
      ),
      builder.addCase(signinThunk.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error;
      });
  }
});

export default signinSlice.reducer;
