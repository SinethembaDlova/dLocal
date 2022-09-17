import React from 'react';
import Alert from '../Alert';
import {
  Container,
  FormContainer
} from '../Container/index.style.js';
import LogoutButton from '../LogoutButton';

const Entity = ({ errorMessage }) => {
  return (
    <Container row>
      <Container small>
        <FormContainer>
          {errorMessage && (
            <Alert variant="error" message={errorMessage} />
          )}
          <LogoutButton />
        </FormContainer>
      </Container>
    </Container>
  );
};

export default Entity;
