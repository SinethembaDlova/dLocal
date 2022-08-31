import axios from 'axios';
import { url } from '../utils/api';

const refreshToken = async () => {
  const path = `${url()}refresh_token`;

  try {
    const refresh_token = await axios.get(path);
    return refresh_token;
  } catch (error) {
    console.log('error: ', error);
    throw new Error(error);
  }
};

export default refreshToken;
