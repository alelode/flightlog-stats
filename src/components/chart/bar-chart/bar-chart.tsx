import React from "react";
import { observer } from "mobx-react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from "react-vis";
import "react-vis/dist/style.css";
import { generateLabelData } from "../dummy-data/dummy-data";
import { Data } from "../chart";

interface ChartProps {
  data: Data[];
}

@observer
export default class BarChart extends React.Component<ChartProps> {
  render() {
    var labelData: any[] = [];
    if (this.props.data.length > 0) {
      labelData = generateLabelData(this.props.data);
    }
    return (
      <XYPlot xType="ordinal" width={950} height={650} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries animation={true} data={this.props.data} />
        <LabelSeries animation={true} data={labelData} />
      </XYPlot>
    );
  }
}
