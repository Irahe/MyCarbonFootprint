import React from 'react';

import { StyledDataTitle } from './style';

const DataTitle = ({ ...props }) => (
  <StyledDataTitle {...props}>{props.children}</StyledDataTitle>
);

export default DataTitle;
