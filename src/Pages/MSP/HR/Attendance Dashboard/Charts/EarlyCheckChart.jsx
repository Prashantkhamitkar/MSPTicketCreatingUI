import React from "react";
import ReactApexChart from "react-apexcharts";

const pieChartData = {
  series: [12, 80, 13, 43, 22],
  options: {
    chart: {
      type: "pie",
      width: 380,
    },
    labels: [
      "Prashant Khamitkar",
      "Abhishek Jadhav",
      "Rakesh Reddy",
      "Henna Bhatia",
      "Sanil Gaonkar",
    
    
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};

const EarlyCheckChart = () => {
  return (
    <React.Fragment>
      <ReactApexChart
        options={pieChartData.options}
        series={pieChartData.series}
        type="pie"
        height="320"
        className="apex-charts"
      />
    </React.Fragment>
  );
};

export default EarlyCheckChart;
