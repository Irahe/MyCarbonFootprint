import styled from 'styled-components';

import { Slider } from 'antd';

import { colors, fonts, fontSizes, spacing } from '../../Styles/defaults';

export const QuestionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  opacity: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: opacity 350ms ease-out;
`;

export const InlineSliderWrapper = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 350px;
`;

export const FoodType = styled.div`
  font-family: ${fonts.lato};
  font-size: ${fontSizes.m};
  line-height: ${fontSizes.m};
  min-width: calc(${fontSizes.m} * 6);
  color: ${colors.greys.grey2};
`;
export const FoodFrequency = styled.div`
  font-family: ${fonts.lato};
  font-size: ${fontSizes.sm};
  line-height: ${fontSizes.sm};
  margin: ${spacing.s};
  color: ${colors.greys.grey2};
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
`;
