import ChartBar from "./ChartBar";
import "./chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxiMim = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, idx) => {
        return (
          <ChartBar
            key={idx}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxiMim}
          ></ChartBar>
        );
      })}
    </div>
  );
};
export default Chart;
