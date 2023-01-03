import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoint.map((data, idx) => {
        return (
          <ChartBar
            key={idx}
            label={data.label}
            value={data.value}
            max-value={value}
          ></ChartBar>
        );
      })}
    </div>
  );
};
export default Chart;
