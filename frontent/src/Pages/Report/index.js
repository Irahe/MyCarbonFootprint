import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer
} from 'recharts';
import { MapDispatch } from '../../Store/index';

import QuestionTitle from '../../Components/QuestionTitle';
import QuestionBody from '../../Components/QuestionBody';

import {
  QuestionWrapper,
  ReportInfo,
  ReportData,
  ReportDataTitle,
  ReportDataValue,
  QuestionFooter
} from './style';

const Report = ({ goTo, report, ...props }) => (
  <QuestionWrapper {...props}>
    <QuestionTitle>Here is your report</QuestionTitle>
    <QuestionBody>
      <ReportInfo>
        <ReportData>
          <ReportDataTitle>Electricity Footprint: </ReportDataTitle>
          <ReportDataValue>
            {report.electricityFootprint.toFixed(2)} kg CO<sub>2</sub>e/yr
          </ReportDataValue>
        </ReportData>
        <ReportData>
          <ReportDataTitle>Fuel Footprint: </ReportDataTitle>
          <ReportDataValue>
            {report.fuelFootprint.toFixed(2)} kg CO<sub>2</sub>e/yr
          </ReportDataValue>
        </ReportData>
        <ReportData>
          <ReportDataTitle>Water Footprint: </ReportDataTitle>
          <ReportDataValue>
            {report.waterFootprint.toFixed(2)} kg CO<sub>2</sub>e/yr
          </ReportDataValue>
        </ReportData>
        <ReportData>
          <ReportDataTitle>Waste Footprint: </ReportDataTitle>
          <ReportDataValue>
            {report.wasteFootprint.toFixed(2)} kg CO<sub>2</sub>e/yr
          </ReportDataValue>
        </ReportData>
        <ReportData>
          <ReportDataTitle>Commute Footprint: </ReportDataTitle>
          <ReportDataValue>
            {report.comuteFootprint.toFixed(2)} kg CO<sub>2</sub>e/yr
          </ReportDataValue>
        </ReportData>
        <ReportData>
          <ReportDataTitle>Food Footprint: </ReportDataTitle>
          <ReportDataValue>
            {report.foodFootprint.toFixed(2)} kg CO<sub>2</sub>e/yr
          </ReportDataValue>
        </ReportData>
        <ReportData>
          <ReportDataTitle style={{ fontWeight: 'bold', color: 'black' }}>
            Total Footprint:{' '}
          </ReportDataTitle>
          <ReportDataValue style={{ fontWeight: 'bold' }}>
            {report.total.toFixed(2)} kg CO<sub>2</sub>e/yr
          </ReportDataValue>
        </ReportData>
      </ReportInfo>

      <ResponsiveContainer width="55%" height="100%">
        <BarChart
          width={400}
          height={120}
          data={[
            {
              name: 'Report',
              Electricity: report.electricityFootprint.toFixed(2),
              Fuel: report.fuelFootprint.toFixed(2),
              Water: report.waterFootprint.toFixed(2),
              Waste: report.wasteFootprint.toFixed(2),
              Commute: report.comuteFootprint.toFixed(2),
              Food: report.foodFootprint.toFixed(2)
            }
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Electricity" fill="#8884d8" />
          <Bar dataKey="Fuel" fill="#83a6ed" />
          <Bar dataKey="Water" fill="#8dd1e1" />
          <Bar dataKey="Waste" fill="#82ca9d" />
          <Bar dataKey="Commute" fill="#a4de6c" />
          <Bar dataKey="Food" fill="#d0ed57" />
        </BarChart>
      </ResponsiveContainer>
    </QuestionBody>
    <QuestionFooter>
      <Button
        type="default"
        onClick={() => {
          goTo('welcome');
        }}
      >
        Go Back Home
      </Button>
    </QuestionFooter>
  </QuestionWrapper>
);

// mapping store to app props as it is a provider....
const mapStateToProps = ({ report }) => ({ report });

// connecting the store context to the app's...
export default connect(mapStateToProps, MapDispatch)(Report);
