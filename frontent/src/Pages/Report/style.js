import styled from 'styled-components';
import { colors, fontSizes, spacing } from '../../Styles/defaults';

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

export const ReportInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 350px;
  margin-bottom: ${spacing.xl};
  margin-top: ${spacing.xl};
`;
export const ReportData = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ReportDataTitle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.l};
  line-height: ${fontSizes.l};
  margin-right: ${spacing.m};
  color: ${colors.gray_text};
`;
export const ReportDataValue = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.m};
  line-height: ${fontSizes.m};
`;
