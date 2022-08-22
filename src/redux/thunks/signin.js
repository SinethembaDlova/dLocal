import { createAsyncThunk } from '@reduxjs/toolkit';
import signinApi from '../../api/signin';

const signin = createAsyncThunk('signin', async body => {
  const apiCall = await signinApi(body);
  const access_token = apiCall.access_token;
  return localStorage.setItem('access_token', access_token);
});

export default signin;
