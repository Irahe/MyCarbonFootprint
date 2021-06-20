import React from 'react';
import { Switch } from 'antd';
import { SwitchWrapper, Alternative } from './style';

const YesNoSwitch = ({ onChange, defaultValue }) => (
  <SwitchWrapper>
    <Alternative>No</Alternative>
    <Switch defaultChecked={defaultValue} onChange={onChange} />
    <Alternative>Yes</Alternative>
  </SwitchWrapper>
);

export default YesNoSwitch;
