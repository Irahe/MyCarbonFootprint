import styled from 'styled-components';
import { spacing } from '../../Styles/defaults';

export const QuestionWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  opacity: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: opacity 350ms ease-out;
`;

export const PretyPleaseImg = styled.img`
  width: 20vw;
  min-width: 250px;
  margin-top: ${spacing.l};
`;
