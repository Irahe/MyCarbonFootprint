import styled from 'styled-components';
import { spacing, fonts, colors, fontSizes } from '../../Styles/defaults';

export const StyledDataTitle = styled.div`
  font-family: ${fonts.lato};
  color: ${colors.gray_text};
  font-size: ${fontSizes.xl};
  line-height: ${fontSizes.xl};
  margin-bottom: ${spacing.m};
  text-align: left;
`;
