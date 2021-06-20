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

const Electricity = ({ goTo, electricity, save, ...props }) => (
  <QuestionWrapper {...props}>
    <QuestionTitle>What about your electrical consumption</QuestionTitle>
    <QuestionBody>
      <Question>
        <DataTitle>How mutch do you consume monthly (kWh):</DataTitle>
        <InputNumber
          value={electricity}
          autoFocus
          decimalSeparator="."
          size="large"
          stringMode
          onChange={(val) => {
            save('electricity', val);
          }}
          onKeyDown={(event) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
              goTo('fuels');
            }
          }}
        />
      </Question>
    </QuestionBody>
    <QuestionFooter goTo={goTo} backKey="basics" nextKey="fuels" />
  </QuestionWrapper>
);

// mapping store to app props as it is a provider....
const mapStateToProps = ({ electricity }) => ({ electricity });

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(Electricity);
