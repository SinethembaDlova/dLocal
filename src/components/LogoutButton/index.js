import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Buttons';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async event => {
    event.preventDefault();
    setAuth(null);
    navigate('/signin');
  };

  return (
    <Button onClick={ handleLogout }>Logout</Button>
  );
};

const mapProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapProps, mapDispatchToProps)(LogoutButton);