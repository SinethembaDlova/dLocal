import axios from 'axios';
import { url } from '../utils/api';

const signup = async body => {
    const path = `${url()}/users/signup`;

    try {
      const results = await axios.post(path, body);
      return results;
    } catch (error) {
      throw new Error(error);
    }
}

export default signup;