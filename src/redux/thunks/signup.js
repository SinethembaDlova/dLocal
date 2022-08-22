import { createAsyncThunk } from '@reduxjs/toolkit';
import signupApi from '../../api/signup';

const signup = createAsyncThunk('signup', async body => {
  const apiCall = signupApi(body);
  const access_token = apiCall.access_token;
  return localStorage.setItem('access_token', access_token);
});

export default signup;
