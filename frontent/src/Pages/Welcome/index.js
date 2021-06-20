import React from 'react';

import { Button } from 'antd';

import {
  WelcomepageWrapper,
  WelcomeTitle,
  CenterLine,
  ToolDescriptionWrapper,
  FootPrintImage,
  ToolDescriptionTitle,
  ToolDescription,
  BottomLine
} from './style';

import footPrintSRC from '../../Assets/img/co2Footprint.png';

const Welcome = ({ goTo, ...props }) => (
  <WelcomepageWrapper {...props}>
    <WelcomeTitle>Hello and welcome</WelcomeTitle>
    <CenterLine>
      <ToolDescriptionWrapper>
        <ToolDescriptionTitle>
          Do you know how your lifestyle impacts on the environment?
        </ToolDescriptionTitle>
        <ToolDescriptionTitle>
          Would you be prepared to understand each aspect of your carbon
          environmental footprint?
        </ToolDescriptionTitle>
        <ToolDescription>
          This breaf assessment is a tool to help people measure and uderstand
          their carbon footprint by applying a numerical approach to it. To do
          so, you will be asked a few simple day to day questions. After that
          our system will calculate your footprint and show to you in a simple
          report/dashboard. The calculation is not the end goal, but rather the
          means to achieving a reduction in your footprint – first through
          understand of what ins envolved, then changes in your habits.
        </ToolDescription>
        <ToolDescription>
          Also, this assessment is anonymous and do not register any data from
          the user unless permited. After the report you will be asked if you
          authorize to save the provided information for further anonymous
          statistics.
        </ToolDescription>
      </ToolDescriptionWrapper>
      <FootPrintImage alt="co2Footprint" src={footPrintSRC} />
    </CenterLine>
    <BottomLine>
      <Button
        size="large"
        type="primary"
        onClick={() => {
          goTo('basics');
        }}
      >
        Start Acessment
      </Button>
    </BottomLine>
  </WelcomepageWrapper>
);

export default Welcome;
