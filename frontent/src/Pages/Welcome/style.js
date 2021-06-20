import styled, { css } from 'styled-components';
import { fonts, colors, fontSizes, spacing } from '../../Styles/defaults';

export const WelcomepageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: opacity 350ms ease-out;
  ${({ showAnimation }) =>
    !showAnimation &&
    css`
      opacity: 1;
    `}
  overflow-y: scroll;
`;

export const WelcomeTitle = styled.span`
  font-family: ${fonts.lato};
  color: ${colors.gray_heading};
  font-size: ${fontSizes.el};
  line-height: ${fontSizes.el};
  margin-top: ${spacing.l};
  text-align: center;
`;

export const CenterLine = styled.div`
  width: 100vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  flex-wrap: wrap-reverse;

  margin-top: ${spacing.xl};
`;
export const BottomLine = styled.div`
  width: 100vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  margin-top: ${spacing.xl};
`;

export const ToolDescriptionWrapper = styled.div`
  max-width: 500px;

  padding: 20px;
  min-width: 250px;
`;
export const ToolDescriptionTitle = styled.p`
  font-family: ${fonts.lato};
  color: ${colors.gray_text};
  font-size: ${fontSizes.l};
  line-height: ${fontSizes.l};
  font-weight: bold;
  text-align: justify;
`;
export const ToolDescription = styled.p`
  font-family: ${fonts.lato};
  color: ${colors.gray_text};
  font-size: ${fontSizes.m};
  line-height: ${fontSizes.m};
  text-align: justify;
`;
export const FootPrintImage = styled.img`
  width: 18vw;
  margin-right: ${spacing.xxl};
  margin-left: ${spacing.xxl};
`;
