import { useState } from "react";
import ChartOptions from "@/component/chart/ChartOptions";
import ChartRenderer from "@/component/chart/ChartRenderer";
import useChartOptions from "@/hook/useChartOptions";

import type { FC } from "react";
import type { Chart, Options } from "highcharts";

type GenericChartProps = {
  chartType: DataType;
  customOptions: Options;
};

const GenericChart: FC<GenericChartProps> = ({ chartType, customOptions }) => {
  const [chartInstance, setChartInstance] = useState<Chart | null>(null);
  const options = useChartOptions(chartType, customOptions);

  return (
    <>
      <ChartOptions chart={chartInstance} />
      <ChartRenderer options={options} onChartReady={setChartInstance} />
    </>
  );
};

export default GenericChart;
