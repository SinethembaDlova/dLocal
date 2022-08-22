import axios from 'axios';
import { url } from '../utils/api';

const signinApi = async body => {
  const path = `${url()}/users/signin`;

  try {
    const results = await axios.post(path, body);
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export default signinApi;
