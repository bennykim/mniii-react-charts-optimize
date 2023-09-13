import { useRef, useEffect, memo } from "react";
import Highcharts from "highcharts";

import type { FC, Dispatch, SetStateAction } from "react";
import type { Chart, Options } from "highcharts";

type ChartRendererProps = {
  options: Options;
  onChartReady: Dispatch<SetStateAction<Chart | null>>;
};

const ChartRenderer: FC<ChartRendererProps> = ({ options, onChartReady }) => {
  let containerRef = useRef(null);
  let chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      chartRef.current = Highcharts.chart(containerRef.current, options);
      if (onChartReady) {
        onChartReady(chartRef.current);
      }
    }

    return () => {
      if (containerRef.current && chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [options, onChartReady]);

  return <div ref={containerRef}></div>;
};

export default memo(ChartRenderer);
