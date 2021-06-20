import React from 'react';
import { connect } from 'react-redux';
import { MapDispatch } from '../../Store/index';

import YesNoSwitch from '../../Components/YesNoSwitch';

import QuestionTitle from '../../Components/QuestionTitle';
import QuestionBody from '../../Components/QuestionBody';
import QuestionFooter from '../../Components/QuestionFooter';
import Question from '../../Components/Question';
import DataTitle from '../../Components/DataTitle';

import { QuestionWrapper, PretyPleaseImg } from './style';

import pretyPleaseImgSRC from '../../Assets/img/pretty-please.jpg';

const CanSaveComponent = ({ goTo, canSave, save, ...props }) => (
  <QuestionWrapper {...props}>
    <QuestionTitle>
      Would you allow us to save you data anonymously?
    </QuestionTitle>
    <QuestionBody>
      <Question>
        <DataTitle>
          This data will only be used for statistics and report acuracy.
        </DataTitle>
        <YesNoSwitch
          defaultValue
          onChange={(val) => {
            save('canSave', val);
          }}
        />
      </Question>
      <PretyPleaseImg alt="" src={pretyPleaseImgSRC} />
    </QuestionBody>
    <QuestionFooter goTo={goTo} backKey="food" nextKey="save_and_process" />
  </QuestionWrapper>
);

// mapping store to app props as it is a provider....
const mapStateToProps = ({ canSave }) => ({ canSave });

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(CanSaveComponent);
