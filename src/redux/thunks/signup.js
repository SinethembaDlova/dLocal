import { createAsyncThunk } from '@reduxjs/toolkit';
import signup from '../../api/signup';

const signup = createAsyncThunk(
    'signup',
    async body => {
        const signup = signup(body);
        const access_token = signup.access_token;
        return localStorage.setItem('access_token', access_token);
    }
)

export default signup;