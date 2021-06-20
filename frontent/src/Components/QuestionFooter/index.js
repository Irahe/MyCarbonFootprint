import React from 'react';

import { Button } from 'antd';

import { StyledQuestionFooter } from './style';

const QuestionBody = ({ nextKey, backKey, goTo, ...props }) => (
  <StyledQuestionFooter {...props}>
    <Button
      size="large"
      type="default"
      onClick={() => {
        goTo(backKey);
      }}
      style={{ marginRight: '2rem' }}
    >
      Back
    </Button>
    <Button
      size="large"
      type="primary"
      onClick={() => {
        goTo(nextKey);
      }}
    >
      Next
    </Button>
  </StyledQuestionFooter>
);

export default QuestionBody;
