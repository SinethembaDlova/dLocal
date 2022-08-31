import refreshToken from '../api/refreshToken';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await refreshToken();
    setAuth(prev => {
      console.log(JSON.stringify(prev));
      console.log(response?.access_token);
      return { ...prev, access_token: response?.access_token };
    });
    return response?.access_token;
  };
  return refresh;
};

export default useRefreshToken;
