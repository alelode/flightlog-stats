import React from "react";
import { observer } from "mobx-react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";
import "react-vis/dist/style.css";

interface ChartProps {
  data1: { x: number; y: number }[];
  data2: { x: number; y: number }[];
}

@observer
export default class LineChart extends React.Component<ChartProps> {
  //   constructor(props: ChartProps) {
  //     super(props);
  //   }

  render() {
    return (
      <XYPlot width={950} height={650}>
        <HorizontalGridLines />
        <LineSeries animation={true} data={this.props.data1} />
        <LineSeries animation={true} data={this.props.data2} />
        <XAxis />
        <YAxis />
      </XYPlot>
    );
  }
}
