import { createAsyncThunk } from '@reduxjs/toolkit';
import signinApi from '../../api/signin';

const signin = createAsyncThunk('signin', async body => {
  const session = await signinApi(body);
  return session;
});

export default signin;
