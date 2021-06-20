import React from 'react';

import { StyledQuestionBody } from './style';

const QuestionBody = ({ ...props }) => (
  <StyledQuestionBody {...props}>{props.children}</StyledQuestionBody>
);

export default QuestionBody;
