import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MapDispatch } from '../../Store/index';

import callApi from '../../Services/api';
import services from '../../Services';

import { AnimationOverlay, GifImage, AnimationDiv, TextUnder } from './style';

import welcomeSVGSRC from '../../Assets/svg/loading.svg';

const SaveAndProcess = ({ store, store: { report }, goTo, save }) => {
  const processAnswer = async (answer) => {
    console.log('processing', answer);
    const resultingReport = await callApi(services.processAnswer, answer);
    console.log(resultingReport);
    save('report', resultingReport);
  };

  useEffect(() => {
    if (store) {
      const answer = (({
        people,
        electricity,
        naturalGas,
        lpg,
        oil,
        water,
        waste,
        comuteByCar,
        comuteByBus,
        carType,
        dairy,
        drinks,
        fruits,
        redMeat,
        whiteMeat,
        vegetables,
        // eslint-disable-next-line
        can_save,
        cereals
      }) => ({
        people,
        electricity,
        naturalGas,
        lpg,
        oil,
        water,
        waste,
        comuteByCar,
        comuteByBus,
        carType,
        dairy,
        drinks,
        fruits,
        redMeat,
        whiteMeat,
        vegetables,
        can_save,
        cereals
      }))(store);
      processAnswer(answer);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (report) {
      goTo('report');
    }
    // eslint-disable-next-line
  }, [report]);

  return (
    <AnimationOverlay>
      <AnimationDiv>
        <GifImage alt="intro_gif" src={welcomeSVGSRC} />
      </AnimationDiv>
      <TextUnder>Please wait a few seconds...</TextUnder>
    </AnimationOverlay>
  );
};

// connecting the store context to the app's...
export default connect((store) => ({ store }), MapDispatch)(SaveAndProcess);
