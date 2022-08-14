import styled, { css } from 'styled-components';

const defaultButton = css`
  background-color: #6a62d2;
  border-radius: 3px;
  border: 5px solid 6A62D2;
  color: white;
  padding: 0.25px 1px;
  width: 100%;
  margin: 5% 0 0 0;

  &:hover {
    background-color: #274064;
    color: white;
    border: 5px solid #274064;
  }
`;

const CustomButton = styled.button`
  height: 50px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;

  ${defaultButton}
`;

const ButtonCointainer = styled.div`
  margin: 0% 10% 1% 10%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 25px 0 10px;
`;

export { CustomButton, ButtonCointainer, ButtonsContainer };
