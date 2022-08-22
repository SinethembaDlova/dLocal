import { createAsyncThunk } from '@reduxjs/toolkit';
import signinApi from '../../api/signin';

const signin = createAsyncThunk('signin', async body => {
  const session = await signinApi(body);
  const access_token = session.access_token;
  localStorage.setItem('access_token', access_token);
  return session;
});

export default signin;
