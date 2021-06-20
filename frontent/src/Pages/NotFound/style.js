import styled from 'styled-components';

import { fonts, colors, fontSizes } from '../../Styles/defaults';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const NotFoundImage = styled.img`
  max-height: 50vh;
`;

export const MainNFMessage = styled.span`
  font-size: ${fontSizes.xxl};
  line-height: ${fontSizes.xxl};
  font-weight: bold;
  font-family: ${fonts.lato};
  color: ${colors.gray_dark};
  text-align: center;
`;
