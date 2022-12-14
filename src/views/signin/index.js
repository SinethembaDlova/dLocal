import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert';
import Button from '../../components/Buttons';
import {
  Container,
  FormContainer,
  Form
} from '../../components/Container/index.style.js';
import FormInput from '../../components/FormInput';
import Loader from '../../components/Loader';
import { Heading2 } from '../../components/Typography';
import AuthContext from '../../context/AuthProvider';
import { signinThunk } from '../../redux/thunks';

const Signin = ({ signin, user, status }) => {
  const { setAuth } = useContext(AuthContext);

  const [username, setUsername] = useState({
    field: '',
    valid: null
  });
  const [password, setPassword] = useState({
    field: '',
    valid: null
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage(null);
    if (status === 'failed')
      setErrorMessage('Username or password does not exist.');
  }, [errorMessage, status]);

  const handleSubmit = async event => {
    event.preventDefault();
    const body = {
      username: username.field,
      password: password.field
    };
    await signin(body);
    setAuth(user);
    navigate('/home');
  };

  if (status === 'signing in') return <Loader />;

  return (
    <Container row>
      <Container small>
        <FormContainer>
          <Heading2>SIGN IN YOUR ACCOUNT</Heading2>
          {errorMessage && (
            <Alert variant="error" message={errorMessage} />
          )}
          <Form onSubmit={handleSubmit}>
            <FormInput
              state={username}
              placeholder="Username"
              name="username"
              incorrectMessage="Please enter a correct username."
              setState={setUsername}
              text="text"
              required
            />
            <FormInput
              state={password}
              placeholder="Password"
              name="password"
              incorrectMessage="Please enter a correct password."
              setState={setPassword}
              type="password"
              required
            />
            <Button type="submit">Sign In</Button>
            <p>
              Dont have an account? <a href="/signup">Sign up</a>
            </p>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

const mapProps = state => ({
  status: state.user.status,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    signin: data => dispatch(signinThunk(data))
  };
};

export default connect(mapProps, mapDispatchToProps)(Signin);
