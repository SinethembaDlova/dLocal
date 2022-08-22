import { createAsyncThunk } from '@reduxjs/toolkit';
import signin from '../../api/signin';

const signin = createAsyncThunk(
    'signin',
    async body => {
      const signin = await signin(body);
      const access_token = signin.access_token;
      return localStorage.setItem('access_token', access_token);

    }
)

export default signin;