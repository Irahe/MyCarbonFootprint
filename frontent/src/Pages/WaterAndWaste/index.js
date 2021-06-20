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

const WaterAndWaste = ({ goTo, water, waste, save, ...props }) => (
  <QuestionWrapper {...props}>
    <QuestionTitle>Great! Now your water and waste behaviour</QuestionTitle>
    <QuestionBody>
      <Question>
        <DataTitle>How mutch Water do you use monthly (gallon):</DataTitle>
        <InputNumber
          value={water}
          autoFocus
          decimalSeparator="."
          size="large"
          stringMode
          onChange={(val) => {
            save('water', val);
          }}
        />
      </Question>
      <Question>
        <DataTitle>How mutch Waste do you produce weakly (kg):</DataTitle>
        <InputNumber
          value={waste}
          autoFocus={false}
          decimalSeparator="."
          size="large"
          stringMode
          onChange={(val) => {
            save('waste', val);
          }}
          onKeyDown={(event) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
              goTo('comute');
            }
          }}
        />
      </Question>
    </QuestionBody>
    <QuestionFooter goTo={goTo} backKey="fuels" nextKey="comute" />
  </QuestionWrapper>
);

// mapping store to app props as it is a provider....
const mapStateToProps = ({ water, waste }) => ({ water, waste });

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(WaterAndWaste);
