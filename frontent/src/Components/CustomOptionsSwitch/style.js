import styled from 'styled-components';
import { fontSizes, fonts, colors, spacing } from '../../Styles/defaults';

export const SwitchWrapper = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 200px;
  width: 100%;
`;

export const Alternative = styled.span`
  font-size: ${fontSizes.l};
  line-height: ${fontSizes.l};
  color: ${colors.gray_dark};
  font-family: ${fonts.lato};
  margin-left: ${spacing.s};
  margin-right: ${spacing.s};
  width: 100%;
  text-align: center;
`;
