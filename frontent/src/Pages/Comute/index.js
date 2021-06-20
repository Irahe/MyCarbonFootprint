import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Select, InputNumber } from 'antd';
import { MapDispatch } from '../../Store/index';

import QuestionTitle from '../../Components/QuestionTitle';
import QuestionBody from '../../Components/QuestionBody';
import QuestionFooter from '../../Components/QuestionFooter';
import Question from '../../Components/Question';
import DataTitle from '../../Components/DataTitle';
import CustomOptionsSwitch from '../../Components/CustomOptionsSwitch';

import { QuestionWrapper } from './style';

const { Option } = Select;

const Comute = ({
  goTo,
  comuteByCar,
  comuteByBus,
  efCategories,
  carType,
  save,
  ...props
}) => {
  const [isComuteByCar, setIsComuteByCar] = useState(false);
  const [carTypes] = useState(
    efCategories
      ? efCategories.find((el) => el.name === 'Vehicles')?.subCategories
      : []
  );
  return (
    <QuestionWrapper {...props}>
      <QuestionTitle>
        Let&apos;s analyse your displacement footprint
      </QuestionTitle>
      <QuestionBody>
        <Question>
          <DataTitle>How do you commute? (you can fill both)</DataTitle>
          <CustomOptionsSwitch
            leftOption="By Bus"
            rightOption="By Car"
            defaultValue={isComuteByCar}
            onChange={setIsComuteByCar}
          />
        </Question>
        {isComuteByCar && (
          <Question>
            <DataTitle>Please select your car type:</DataTitle>
            <Select
              value={carType}
              onChange={(val) => {
                save('carType', val);
              }}
              style={{ width: 200 }}
              loading={!(carTypes && carTypes.length > 0)}
            >
              {
                // eslint-disable-next-line
                carTypes.map((type) => {
                  if (type.name !== 'Bus') {
                    return (
                      <Option key={`car-type${type.id}`} value={type.id}>
                        {type.name}
                      </Option>
                    );
                  }
                })
              }
            </Select>
          </Question>
        )}
        <Question>
          <DataTitle>
            How much miles do you percour
            {isComuteByCar ? ' by car' : ' by bus'} weakly?
          </DataTitle>
          <InputNumber
            value={isComuteByCar ? comuteByCar : comuteByBus}
            autoFocus={false}
            decimalSeparator="."
            size="large"
            stringMode
            onChange={(val) => {
              save(isComuteByCar ? 'comuteByCar' : 'comuteByBus', val);
            }}
          />
        </Question>
      </QuestionBody>
      <QuestionFooter goTo={goTo} backKey="water_and_waste" nextKey="food" />
    </QuestionWrapper>
  );
};

// mapping store to app props as it is a provider....
const mapStateToProps = ({
  comuteByCar,
  comuteByBus,
  efCategories,
  carType
}) => ({
  comuteByCar,
  comuteByBus,
  efCategories,
  carType
});

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(Comute);
