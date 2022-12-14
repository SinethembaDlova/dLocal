import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(CenteredContainer)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 800px) {
    flex-direction: ${props => (props.row ? 'row' : 'column')};
    width: ${props => (props.small ? '50%' : '100%')};
  }
`;

const FormContainer = styled(CenteredContainer)`
  display: flex;
  padding: 20px 24px 20px 24px;
  text-align: center;
  width: 85%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 0px 15px -4px #000000;
  border-radius: var(--theme-border-rounded);
  display: ${props => (props.hidden ? 'none' : 'block')};

  @media (min-width: 800px) {
    width: 80%;
    max-width: 424px;
    padding: 19px 22px 19px;
  }
`;

const Form = styled.form`
  width: 100%;
  margin-top: 12px; ;
`;

export { Container, FormContainer, Form };
