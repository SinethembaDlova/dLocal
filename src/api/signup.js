import axios from 'axios';
import { url } from '../utils/api';

const signupApi = async body => {
  const path = `${url()}signup`;

  try {
    const session = await axios.post(path, body);
    return session?.data;
  } catch (error) {
    return error;
  }
};

export default signupApi;
