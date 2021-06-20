import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { MapDispatch } from '../../Store/index';

import { preloadAssets, preloadServices } from '../../Tools/preloader';

import { AnimationOverlay, GifImage, AnimationDiv } from './style';

import welcomeSVGSRC from '../../Assets/svg/loading.svg';

const IntroAnimation = ({ goTo, save, ...props }) => {
  useEffect(() => {
    preloadAssets();
    preloadServices(save);
    setTimeout(() => {
      goTo('welcome');
    }, 3000);
    // eslint-disable-next-line
  }, []);

  return (
    <AnimationOverlay {...props}>
      <AnimationDiv>
        <GifImage alt="intro_gif" src={welcomeSVGSRC} />
      </AnimationDiv>
    </AnimationOverlay>
  );
};

// connecting the store context to the app's...
export default connect(() => ({}), MapDispatch)(IntroAnimation);
