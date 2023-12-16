import React, { Component } from "react";
import Chart from "react-google-charts";
const LineData = [
  ["x", "Created", "Issued","Closed"],
  ["Created", 1, 0,2],
  [1, 10, 5,36],
  [2, 23, 15,56]
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
          rootProps={{ "data-testid": "0" }}
        />
      </div>
    );
  }
}
export default MultiLineChart;
