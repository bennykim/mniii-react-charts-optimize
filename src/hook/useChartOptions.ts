import { useState, useEffect } from "react";
import _ from "lodash";
import lineOptions from "@/config/charts/default/line";
import areaOptions from "@/config/charts/default/area";
import { CHART_TYPE_LINE, CHART_TYPE_AREA } from "@/constant";

import type { Options } from "highcharts";

const useChartOptions = (dataType: DataType, customOptions: Options = {}) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    let baseOptions = {};

    switch (dataType) {
      case CHART_TYPE_LINE:
        baseOptions = _.cloneDeep(lineOptions);
        break;
      case CHART_TYPE_AREA:
        baseOptions = _.cloneDeep(areaOptions);
        break;
      default:
        baseOptions = {};
    }

    const mergedOptions = { ...baseOptions, ...customOptions };
    setOptions(mergedOptions);
  }, [dataType]);

  return options;
};

export default useChartOptions;
