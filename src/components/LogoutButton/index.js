import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import Button from '../Buttons';

const LogoutButton = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async event => {
    event.preventDefault();
    setAuth(null);
    navigate('/signin');
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
