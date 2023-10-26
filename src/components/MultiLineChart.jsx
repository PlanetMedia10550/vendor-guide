import React, { Component } from "react";
import Chart from "react-google-charts";
const LineData = [
  ["x", "dogs", "cats"],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
];
const LineChartOptions = {
  series: {
    1: { curveType: "function" },
  },
};
class MultiLineChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Chart
          width={"451px"}
          height={"250px"}
          min-height={"255px"}
          chartType="LineChart"
          data={LineData}
          options={LineChartOptions}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}
export default MultiLineChart;
