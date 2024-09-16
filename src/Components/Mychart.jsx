import ReactApexChart from "react-apexcharts";

const MyChart = () => {
 
    const series = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];
 
  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
 

  return (
    <div className="chart">
      <h1>Line Chart</h1>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default MyChart;
