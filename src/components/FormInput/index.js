import React from 'react';
import {
  Input,
  GroupInput,
  IncorrectMessage,
  ValidationIcon
} from './index.style';

const FormInput = ({
  placeholder,
  type,
  name,
  incorrectMessage,
  setState,
  state,
  normalExp,
  same
}) => {
  const onChange = ({ target }) => {
    setState({ ...state, field: target.value });
  };

  const validation = () => {
    if (normalExp) {
      if (normalExp.test(state.field))
        setState({ ...state, valid: 'true' });
      else setState({ ...state, valid: 'false' });
    }
    if (same) same();
  };

  return (
    <div>
      <GroupInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          value={state.field}
          onKeyUp={validation}
          onBlur={validation}
          valid={state.valid}
        />
        {
          <ValidationIcon
            valid={state.valid}
            icon={
              state.valid === 'true' ? (
                <i className="material-icons">check circle</i>
              ) : (
                <i className="material-icons">dangerous</i>
              )
            }
          />
        }
      </GroupInput>
      <IncorrectMessage valid={state.valid}>
        {incorrectMessage}
      </IncorrectMessage>
    </div>
  );
};

export default FormInput;
