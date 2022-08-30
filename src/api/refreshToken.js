import axios from 'axios';
import { url } from '../utils/api';

const refreshToken = async () => {
  const path = `${url()}users/refresh_token`;
  try {
    const refresh_token = await axios.get(path, {
        withCredentials: true
    });
    return refresh_token;
  } catch (error) {
    throw new Error(error);
  }
};

export default refreshToken;