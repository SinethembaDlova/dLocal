import { createAsyncThunk } from '@reduxjs/toolkit';
import signup from '../../api/signup';

const signup = createAsyncThunk(
    'signup',
    async body => {
      return signup(body);
    }
)

export default signup;