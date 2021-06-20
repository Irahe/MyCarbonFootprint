import styled from 'styled-components';
import { fontSizes, spacing } from '../../Styles/defaults';

export const StyledQuestionBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-height: calc(100vh - 75px - ${fontSizes.xxxl} - ${spacing.xxl});
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;
