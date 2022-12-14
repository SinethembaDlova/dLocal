import axios from 'axios';
import { url } from '../utils/api';

const signinApi = async body => {
  const path = `${url()}signin`;
  try {
    const session = await axios.post(path, body);
    return session?.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default signinApi;
