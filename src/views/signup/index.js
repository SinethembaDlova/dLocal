import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
import { signupThunk } from '../../redux/thunks';

const Signup = ({ signup, user, status }) => {
  const { setAuth } = useContext(AuthContext);
  const [first_name, setFirstname] = useState({
    field: '',
    valid: null
  });
  const [last_name, setLastname] = useState({
    field: '',
    valid: null
  });
  const [username, setUsername] = useState({
    field: '',
    valid: null
  });
  const [password, setPassword] = useState({
    field: '',
    valid: null
  });
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
    if (status === 'failed')
      setErrorMessage('Oops sigining up failed.');
  }, [errorMessage, status]);

  const handleSubmit = event => {
    event.preventDefault();
    const body = {
      first_name: first_name.field,
      last_name: last_name.field,
      username: username.field,
      password: password.field
    };
    signup(body);
    setAuth(user);
  };

  if (status === 'signing up') return <Loader />;

  return (
    <Container row>
      <Container small>
        <FormContainer>
          <Heading2>SIGN UP A NEW ACCOUNT</Heading2>
          {errorMessage && (
            <Alert variant="error" message={errorMessage} />
          )}
          <Form onSubmit={handleSubmit}>
            <FormInput
              state={first_name}
              placeholder="First Name"
              name="first_name"
              incorrectMessage="Please enter a correct first name."
              setState={setFirstname}
            />
            <FormInput
              state={last_name}
              placeholder="Last Name"
              name="last_name"
              incorrectMessage="Please enter a correct last name."
              setState={setLastname}
            />
            <FormInput
              state={username}
              placeholder="Username"
              name="username"
              incorrectMessage="Please enter a correct username."
              setState={setUsername}
            />
            <FormInput
              state={password}
              placeholder="Password"
              name="password"
              incorrectMessage="Please enter a correct password."
              setState={setPassword}
              type="password"
            />
            <Button type="submit">Sign Up</Button>
            <p>
              You have an account already?{' '}
              <a href="/signin">Sign in</a>
            </p>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

const mapProps = state => ({
  status: state.user.status,
  user: state?.user?.payload
});

const mapDispatchToProps = dispatch => {
  return {
    signup: data => dispatch(signupThunk(data))
  };
};

export default connect(mapProps, mapDispatchToProps)(Signup);
