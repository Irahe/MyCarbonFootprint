import React from 'react';

import { StyledQuestion } from './style';

const Question = ({ ...props }) => (
  <StyledQuestion {...props}>{props.children}</StyledQuestion>
);

export default Question;
