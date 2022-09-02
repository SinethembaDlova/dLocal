import React from 'react';
import {
  AlertContainer,
  IconTextWrapper,
  IconWrapper,
  TextWrapper
} from './index.style';
import { VARIANT } from 'constants';

const Alert = ({ variant, message, noBorder, ...restProps }) => {
  return (
    <AlertContainer
      variant={ variant }
      message={ message }
      noBorder={ noBorder }
      {...restProps}
    >
      <IconTextWrapper>
        <IconWrapper>
          { variant === VARIANT.SUCCESS && <i className="material-icons">check circle</i> }
          { variant === VARIANT.WARNING && <i className="material-icons">warning</i> }
          { variant === VARIANT.ERROR && <i className="material-icons">error</i> }
        </IconWrapper>
        <TextWrapper>
          <div>{ message }</div>
        </TextWrapper>
      </IconTextWrapper>
    </AlertContainer>
  );
};

export default Alert;
