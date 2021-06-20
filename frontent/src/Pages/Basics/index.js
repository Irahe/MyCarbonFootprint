import React from 'react';
import { connect } from 'react-redux';
import { InputNumber } from 'antd';
import { MapDispatch } from '../../Store/index';

import QuestionTitle from '../../Components/QuestionTitle';
import QuestionBody from '../../Components/QuestionBody';
import QuestionFooter from '../../Components/QuestionFooter';
import Question from '../../Components/Question';
import DataTitle from '../../Components/DataTitle';

import { QuestionWrapper } from './style';

const Basics = ({ goTo, people, save, ...props }) => (
  <QuestionWrapper {...props}>
    <QuestionTitle>Let&apos;s start with the basics</QuestionTitle>
    <QuestionBody>
      <Question>
        <DataTitle>
          How mutch people leave in your house? (counting with you)
        </DataTitle>
        <InputNumber
          value={people}
          min={1}
          autoFocus
          size="large"
          stringMode={false}
          onChange={(val) => {
            save('people', val);
          }}
          onKeyDown={(event) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
              goTo('electricity');
            }
          }}
        />
      </Question>
    </QuestionBody>
    <QuestionFooter goTo={goTo} backKey="welcome" nextKey="electricity" />
  </QuestionWrapper>
);

// mapping store to app props as it is a provider....
const mapStateToProps = ({ people }) => ({ people });

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(Basics);
