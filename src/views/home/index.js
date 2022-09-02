import React from 'react';
import Button from '../../components/Buttons';
import useRefreshToken from '../../hooks/useRefresh';

const Home = () => {
  return <Button onClick={useRefreshToken()}>refresh token</Button>;
};

export default Home;
