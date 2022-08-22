import { createAsyncThunk } from '@reduxjs/toolkit';
import signin from '../../api/signin';

const signin = createAsyncThunk(
    'signin',
    async body => {
      return signin(body);
    }
)

export default signin;