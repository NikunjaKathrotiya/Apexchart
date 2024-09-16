import React from "react";
import ReactApexChart from "react-apexcharts";

function Piechart() {
  const options = {
    chart: {
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  };
  const series = [44, 55, 13, 43, 22];

  return (
    <div>
      <h1>Pie Chart</h1>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={350}
      />
    </div>
  );
}

export default Piechart;
