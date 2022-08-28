import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Buttons';
import {
  Container,
  FormContainer,
  Form
} from '../../components/Container/index.style.js';
import FormInput from '../../components/FormInput';
import { Heading2 } from '../../components/Typography';
import AuthContext from '../../context/AuthProvider';
import { signinThunk } from '../../redux/thunks';

const Signin = ({ signin, user }) => {
  const { setAuth } = useContext(AuthContext);

  const [username, setUsername] = useState({
    field: '',
    valid: null
  });
  const [password, setPassword] = useState({
    field: '',
    valid: null
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const body = {
      username: username.field,
      password: password.field
    };
    signin(body);
    setAuth(user);
  };

  return (
    <Container row>
      <Container small>
        <FormContainer>
          <Heading2>SIGN IN YOUR ACCOUNT</Heading2>
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
  status: state?.user?.status,
  user: state?.user?.payload
});

const mapDispatchToProps = dispatch => {
  return {
    signin: data => dispatch(signinThunk(data))
  };
};

export default connect(mapProps, mapDispatchToProps)(Signin);
