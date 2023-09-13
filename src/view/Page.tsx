import GenericChart from "@/component/chart/GenericChart";
import { CHART_TYPE_LINE, CHART_TYPE_AREA } from "@/constant";

import type { FC } from "react";

type PageProps = {};

const Page: FC<PageProps> = () => {
  return (
    <>
      <h1>Line Chart</h1>
      <GenericChart chartType={CHART_TYPE_LINE} customOptions={{}} />
      <h1>Area Chart</h1>
      <GenericChart chartType={CHART_TYPE_AREA} customOptions={{}} />
    </>
  );
};

export default Page;
