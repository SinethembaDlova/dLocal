import { createAsyncThunk } from '@reduxjs/toolkit';
import signupApi from '../../api/signup';

const signup = createAsyncThunk('signup', async body => {
  const session = await signupApi(body);
  return session;
});

export default signup;
