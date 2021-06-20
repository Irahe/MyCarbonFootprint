import styled from 'styled-components';
import { fonts, colors, fontSizes, spacing } from '../../Styles/defaults';

export const StyledQuestionTitle = styled.span`
  font-family: ${fonts.lato};
  color: ${colors.gray_heading};
  font-size: ${fontSizes.xxxl};
  line-height: ${fontSizes.xxxl};
  margin-top: ${spacing.l};
  text-align: center;
`;
