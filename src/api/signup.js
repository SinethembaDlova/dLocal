import axios from 'axios';
import { url } from '../utils/api';

const signupApi = async body => {
  const path = `${url()}signup`;

  try {
    const session = await axios.post(path, body);
    return session?.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default signupApi;
