import "./chart.css";

const ChartBar = (props) => {
  /*console.log(props); // chart에 있는 값*/
  let barHeight = "0%"; //차트 개별의 하이트
  if (props.maxValue > 0) {
    // 0 이상일때 차트개별 height 구하기
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart_label">{props.label}</div>
      <div className="chart-inner">
        <div className="chart-bar">
          <div className="chart-fill" style={{ height: barHeight }}>
            {barHeight}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartBar;
