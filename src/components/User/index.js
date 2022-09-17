import React from 'react';
import Alert from '../../components/Alert';
import LogoutButton from '../../components/LogoutButton';
import {
  Container,
  FormContainer
} from '../../components/Container/index.style.js';

const User = ({ errorMessage }) => {
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

export default User;
