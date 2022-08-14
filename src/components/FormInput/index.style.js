import styled, { css } from 'styled-components';

const GroupInput = styled.div`
  z-index: 90;
  padding: 0.25px 1px;
  margin: 0 2% 2% 0;
`;

const Colors = {
  border: '#0075FF',
  error: '#bb2929',
  success: '#1ed12d',
  errorSubmit: '#f66060',
  primary: '#5C62C5'
};

const Input = styled.input`
  background: #fff;
  border-radius: 3px;
  height: 45px;
  border-bottom: 2px solid lightgrey;
  width: 100%;

  &:focus {
    border: 0px;
    border-bottom: 2px solid ${Colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${props =>
    props.valid === 'true' &&
    css`
      border: 0px;
      border-bottom: 3px solid green;
    `}
  ${props =>
    props.valid === 'false' &&
    css`
      border: 0px;
      border-bottom: 3px solid ${Colors.error} !important;
    `}
`;

const IncorrectMessage = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${Colors.error};
  display: none;
  ${props =>
    props.valid === 'true' &&
    css`
      display: none;
    `}
  ${props =>
    props.valid === 'false' &&
    css`
      display: block;
    `}
`;

const SuccessMessage = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  color: ${Colors.success};
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  height: 45px;
  display: flex;
  justify-content: center;
  line-height: 45px;
  background: ${Colors.errorSubmit};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 1;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const ValidationIcon = styled.i`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${props =>
    props.valid === 'true' &&
    css`
      opacity: 1;
      color: ${Colors.success};
    `}
  ${props =>
    props.valid === 'false' &&
    css`
      opacity: 1;
      color: ${Colors.error};
    `}
`;

export {
  Input,
  GroupInput,
  IncorrectMessage,
  ValidationIcon,
  SuccessMessage,
  ErrorMessage
};
