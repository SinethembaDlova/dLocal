import React from 'react';
import Button from '../../components/Buttons';
import {
  Container,
  FormContainer,
  Form
} from '../../components/Container/index.style.js';
import FormInput from '../../components/FormInput';
import { Heading2 } from '../../components/Typography';

const Signin = () => {
  return (
    <Container row>
      <Container small>
        <FormContainer>
          <Heading2>SIGN IN YOUR ACCOUNT</Heading2>
          <Form method="POST">
            <FormInput
              state="dsinethemba@gmail.com"
              placeholder="Username"
              name="last_name"
              incorrectMessage="Please enter a correct username."
              // setState={setLastName}
            />
            <FormInput
              state="**********"
              placeholder="Password"
              name="last_name"
              incorrectMessage="Please enter a correct password."
              // setState={setLastName}
            />
            <Button type="submit">Sign In</Button>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Signin;
