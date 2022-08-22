import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Buttons';
import {
  Container,
  FormContainer,
  Form
} from '../../components/Container/index.style.js';
import FormInput from '../../components/FormInput';
import { Heading2 } from '../../components/Typography';
import { signinThunk } from '../../redux/thunks';

const Signin = ({ signIn }) => {
  const [username, setUsername] = useState({
    field: '',
    valid: null
  });
  const [password, setPassword] = useState({
    field: '',
    valid: null
  });

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: username.field,
      password: password.field
    };
    signIn(user);
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
            />
            <FormInput
              state={password}
              placeholder="Password"
              name="password"
              incorrectMessage="Please enter a correct password."
              setState={setPassword}
              type="password"
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
  status: state.user.status
});

const mapDispatchToProps = dispatch => {
  return {
    signIn: data => dispatch(signinThunk(data))
  };
};

export default connect(mapProps, mapDispatchToProps)(Signin);
