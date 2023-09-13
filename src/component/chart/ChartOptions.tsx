import { memo } from "react";

import type { FC } from "react";
import type { Chart, SeriesOptionsType } from "highcharts";

type ChartOptionsProps = {
  chart: Chart | null;
};

const ChartOptions: FC<ChartOptionsProps> = ({ chart }) => {
  const withChart = (fn: (chart: Chart) => void) => () => {
    if (!chart) {
      return console.warn("Chart is not initialized");
    }
    fn(chart);
  };

  const addSeries = withChart((chartInstance) =>
    chartInstance.addSeries(singleSeries)
  );

  const zoomIn = withChart((chartInstance) =>
    chartInstance.xAxis[0].setExtremes(2012, 2018)
  );

  const zoomOut = withChart((chartInstance) =>
    chartInstance.xAxis[0].setExtremes(2010, 2020)
  );

  if (!chart) return null;

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <button onClick={addSeries}>addSeries</button>
      <button onClick={zoomIn}>zoomIn</button>
      <button onClick={zoomOut}>zoomOut</button>
    </div>
  );
};

export default memo(ChartOptions);

const singleSeries = {
  name: "Other",
  data: [
    21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906, 10073,
  ],
} as SeriesOptionsType;
