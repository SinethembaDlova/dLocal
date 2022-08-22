import { createAsyncThunk } from '@reduxjs/toolkit';
import signupApi from '../../api/signup';

const signup = createAsyncThunk('signup', async body => {
  const session = signupApi(body);
  const access_token = session.access_token;
  localStorage.setItem('access_token', access_token);
  return session;
});

export default signup;
