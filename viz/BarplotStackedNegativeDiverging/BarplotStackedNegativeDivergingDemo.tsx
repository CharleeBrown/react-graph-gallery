import { data } from "./data";
import { StackedBarplot } from "./StackedBarplot";

export const BarplotStackedNegativeDivergingBasicDemo = ({
  width = 700,
  height = 400,
}) => <StackedBarplot data={data} width={width} height={height} />;
