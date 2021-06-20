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

const Fuels = ({ goTo, naturalGas, lpg, oil, save, ...props }) => (
  <QuestionWrapper {...props}>
    <QuestionTitle>Now let&apos;s see your fuel consumtion</QuestionTitle>
    <QuestionBody>
      <Question>
        <DataTitle>
          How mutch Natural Gas do you consume monthly (scf):
        </DataTitle>
        <InputNumber
          value={naturalGas}
          autoFocus
          decimalSeparator="."
          size="large"
          stringMode
          onChange={(val) => {
            save('naturalGas', val);
          }}
        />
      </Question>
      <Question>
        <DataTitle>
          How mutch Propane Gas do you consume monthly (scf):
        </DataTitle>
        <InputNumber
          value={lpg}
          autoFocus={false}
          decimalSeparator="."
          size="large"
          stringMode
          onChange={(val) => {
            save('lpg', val);
          }}
        />
      </Question>
      <Question>
        <DataTitle>
          How mutch Fuel Oil do you consume monthly (gallon):
        </DataTitle>
        <InputNumber
          value={oil}
          autoFocus={false}
          decimalSeparator="."
          size="large"
          stringMode
          onChange={(val) => {
            save('oil', val);
          }}
          onKeyDown={(event) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
              goTo('water_and_waste');
            }
          }}
        />
      </Question>
    </QuestionBody>
    <QuestionFooter
      goTo={goTo}
      backKey="electricity"
      nextKey="water_and_waste"
    />
  </QuestionWrapper>
);

// mapping store to app props as it is a provider....
const mapStateToProps = ({ naturalGas, lpg, oil }) => ({
  naturalGas,
  lpg,
  oil
});

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(Fuels);
