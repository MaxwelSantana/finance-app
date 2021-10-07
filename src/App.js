import { useEffect, useRef } from "react";
import "./App.css";
import { createChart } from "lightweight-charts";

function App() {
  const chartContainerRef = useRef();
  const chart = useRef();
  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: 400,
      height: 300,
    });
    const lineSeries = chart.current.addLineSeries();
    lineSeries.setData([
      { time: "2019-04-11", value: 80.01 },
      { time: "2019-04-12", value: 96.63 },
      { time: "2019-04-13", value: 76.64 },
      { time: "2019-04-14", value: 81.89 },
      { time: "2019-04-15", value: 74.43 },
      { time: "2019-04-16", value: 80.01 },
      { time: "2019-04-17", value: 96.63 },
      { time: "2019-04-18", value: 76.64 },
      { time: "2019-04-19", value: 81.89 },
      { time: "2019-04-20", value: 74.43 },
    ]);
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div ref={chartContainerRef} className="chart-container" />
    </div>
  );
}

export default App;
