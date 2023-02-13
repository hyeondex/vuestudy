import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointValues= props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxiMim = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((data, idx) => {
        return (
          <ChartBar
            key={idx}
            label={data.label}
            value={data.value}
            maxValue={totalMaxiMim}
          ></ChartBar>
        );
      })}
    </div>
  );
};
export default Chart;
