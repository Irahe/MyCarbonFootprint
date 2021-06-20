import React from 'react';

import { StyledQuestionTitle } from './style';

const QuestionTitle = ({ ...props }) => (
  <StyledQuestionTitle {...props}>{props.children}</StyledQuestionTitle>
);

export default QuestionTitle;
