import React, { useState } from 'react';
import Button from '../../components/Buttons';
import {
  Container,
  FormContainer,
  Form
} from '../../components/Container/index.style.js';
import FormInput from '../../components/FormInput';
import { Heading2 } from '../../components/Typography';

const Signin = () => {

  const [username, setUsername] = useState({ field: '', valid: null });
  const [password, setPassword] = useState({ field: '', valid: null });

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username: username.field,
      password: password.field
    };
    console.log('user', user);
  };

  return (
    <Container row>
      <Container small>
        <FormContainer>
          <Heading2>SIGN IN YOUR ACCOUNT</Heading2>
          <Form onSubmit={ handleSubmit }>
            <FormInput
              state={ username }
              placeholder="Username"
              name="username"
              incorrectMessage="Please enter a correct username."
              setState={ setUsername }
            />
            <FormInput
              state={ password }
              placeholder="Password"
              name="password"
              incorrectMessage="Please enter a correct password."
              setState={ setPassword }
              type="password"
            />
            <Button type="submit">Sign In</Button>
            <p>Dont have an account? <a href="/signup">Sign up</a></p>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Signin;
