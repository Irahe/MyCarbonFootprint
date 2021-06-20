import styled from 'styled-components';
import { fontSizes, fonts, colors, spacing } from '../../Styles/defaults';

export const SwitchWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  max-width: 150px;
`;

export const Alternative = styled.span`
  font-size: ${fontSizes.l};
  line-height: ${fontSizes.l};
  color: ${colors.gray_dark};
  font-family: ${fonts.lato};
  margin-left: ${spacing.s};
  margin-right: ${spacing.s};
`;
