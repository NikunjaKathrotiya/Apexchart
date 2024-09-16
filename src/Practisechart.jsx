import ReactApexChart from "react-apexcharts";
import "./App.css";

import MyChart from "./Components/Mychart";
function Practisechart() {
  return (
    <div>
      <h1>Bar Chart</h1>

      <ReactApexChart
        type="bar"
        width={900}
        height={400}
        series={[
          { name: "company1", data: [100, 200, 300, 400, 500] },
          { name: "company2", data: [100, 200, 300, 400, 500] },
          { name: "company3", data: [100, 200, 300, 400, 500] },
          { name: "company4", data: [20, 30, 40, 50, 60] },
          { name: "company5", data: [15, 25, 35, 45, 55, 65, 75, 85, 95] },
        ]}
        options={{
          colors: ["#E4080A", "#8D6F64", "#DFC57B"],
          theme: { mode: "dark" },
          chart: { stacked: true },
          tooltip: { followCursor: true },
          xaxis: {
            categories: ["jan", "feb", "march", "april","may","june","july"],
            tickPlacement: "on",
          },
        }}
      />

    </div>
  );
}

export default Practisechart;
