import React from 'react';
import { connect } from 'react-redux';
import { MapDispatch } from '../../Store/index';

import QuestionTitle from '../../Components/QuestionTitle';
import QuestionBody from '../../Components/QuestionBody';
import QuestionFooter from '../../Components/QuestionFooter';
import Question from '../../Components/Question';
import DataTitle from '../../Components/DataTitle';

import {
  QuestionWrapper,
  InlineSliderWrapper,
  FoodType,
  FoodFrequency,
  StyledSlider
} from './style';

const Food = ({
  goTo,
  redMeat,
  whiteMeat,
  dairy,
  cereals,
  vegetables,
  fruits,
  drinks,
  save,
  ...props
}) => (
  <QuestionWrapper {...props}>
    <QuestionTitle>What about you food consumption behaviour?</QuestionTitle>
    <QuestionBody>
      <Question>
        <DataTitle>How frequent do you eat (weakly):</DataTitle>
        <InlineSliderWrapper>
          <FoodType>White Meat:</FoodType>
          <StyledSlider
            min={0}
            max={7}
            defaultValue={whiteMeat}
            onChange={(val) => {
              save('whiteMeat', val);
            }}
          />
          <FoodFrequency>{whiteMeat}</FoodFrequency>
        </InlineSliderWrapper>
        <InlineSliderWrapper>
          <FoodType>Vegetables:</FoodType>
          <StyledSlider
            min={0}
            max={7}
            defaultValue={vegetables}
            onChange={(val) => {
              save('vegetables', val);
            }}
          />
          <FoodFrequency>{vegetables}</FoodFrequency>
        </InlineSliderWrapper>
        <InlineSliderWrapper>
          <FoodType>Red Meat:</FoodType>
          <StyledSlider
            min={0}
            max={7}
            defaultValue={redMeat}
            onChange={(val) => {
              save('redMeat', val);
            }}
          />
          <FoodFrequency>{redMeat}</FoodFrequency>
        </InlineSliderWrapper>
        <InlineSliderWrapper>
          <FoodType>Cereals:</FoodType>
          <StyledSlider
            min={0}
            max={7}
            defaultValue={cereals}
            onChange={(val) => {
              save('cereals', val);
            }}
          />
          <FoodFrequency>{cereals}</FoodFrequency>
        </InlineSliderWrapper>

        <InlineSliderWrapper>
          <FoodType>Drinks:</FoodType>
          <StyledSlider
            min={0}
            max={7}
            defaultValue={drinks}
            onChange={(val) => {
              save('drinks', val);
            }}
          />
          <FoodFrequency>{drinks}</FoodFrequency>
        </InlineSliderWrapper>
        <InlineSliderWrapper>
          <FoodType>Fruits:</FoodType>
          <StyledSlider
            min={0}
            max={7}
            defaultValue={fruits}
            onChange={(val) => {
              save('fruits', val);
            }}
          />
          <FoodFrequency>{fruits}</FoodFrequency>
        </InlineSliderWrapper>
        <InlineSliderWrapper>
          <FoodType>Dairy:</FoodType>
          <StyledSlider
            min={0}
            max={7}
            defaultValue={dairy}
            onChange={(val) => {
              save('dairy', val);
            }}
          />
          <FoodFrequency>{dairy}</FoodFrequency>
        </InlineSliderWrapper>
      </Question>
    </QuestionBody>
    <QuestionFooter goTo={goTo} backKey="comute" nextKey="can_save" />
  </QuestionWrapper>
);

// mapping store to app props as it is a provider....
const mapStateToProps = ({
  redMeat,
  whiteMeat,
  dairy,
  cereals,
  vegetables,
  fruits,
  drinks
}) => ({
  redMeat,
  whiteMeat,
  dairy,
  cereals,
  vegetables,
  fruits,
  drinks
});

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(Food);
