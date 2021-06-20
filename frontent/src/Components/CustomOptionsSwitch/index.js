import React from 'react';
import { Switch } from 'antd';
import { SwitchWrapper, Alternative } from './style';

const CustomOptionsSwitch = ({
  leftOption,
  rightOption,
  onChange,
  defaultValue
}) => (
  <SwitchWrapper>
    <Alternative>{leftOption}</Alternative>
    <Switch defaultChecked={defaultValue} onChange={onChange} />
    <Alternative>{rightOption}</Alternative>
  </SwitchWrapper>
);

export default CustomOptionsSwitch;
