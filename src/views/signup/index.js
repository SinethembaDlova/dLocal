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
import { signupThunk } from '../../redux/thunks';

const Signup = ({ signup }) => {
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

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      first_name: first_name.field,
      last_name: last_name.field,
      username: username.field,
      password: password.field
    };
    signup(user);
  };

  return (
    <Container row>
      <Container small>
        <FormContainer>
          <Heading2>SIGN UP A NEW ACCOUNT</Heading2>
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
  status: state.user.status
});

const mapDispatchToProps = dispatch => {
  return {
    signup: data => dispatch(signupThunk(data))
  };
};

export default connect(mapProps, mapDispatchToProps)(Signup);
