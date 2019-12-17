import React from "react";
import styles from "./chart.module.css";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import BarChart from "./bar-chart/bar-chart";
// import LineChart from "./line-chart/line-chart";

enum ChartType {
  BarChart = "BarChart",
  LineChart = "LineChart"
}

interface ChartProps {}

export interface Data {
  x: number;
  y: number;
}

export interface Label {
  x: string;
  y: number;
}

interface DropdownData {
  label: string;
  value: string;
}

@observer
export default class Chart extends React.Component<ChartProps> {
  constructor(props: ChartProps) {
    super(props);
    this.selectedChartType = ChartType.BarChart;
    this.xAxis = "";
    this.dataSource = "";
  }

  @observable selectedChartType: ChartType;
  @observable xAxis: string;
  @observable dataSource: string;

  @action
  setSelectedChartType(chartType: ChartType) {
    this.selectedChartType = chartType;
  }

  @action
  setXaxis(xAxis: string) {
    this.xAxis = xAxis;
    this.getData();
  }

  @action setDataSource(dataSource: string) {
    this.dataSource = dataSource;
    this.getData();
  }

  selectNextChartType() {
    if (this.selectedChartType === ChartType.BarChart) {
      return ChartType.LineChart;
    } else {
      return ChartType.BarChart;
    }
  }

  getDatasourceDropdown() {
    const dataSource = [
      {
        label: "Flights",
        value: "flights"
      }
    ];

    return dataSource.map(d => <option value={d.value}>{d.label}</option>);
  }
  getXAxisData() {
    const xAxisData = [
      {
        label: "Duration",
        value: "duration"
      },
      {
        label: "MaxHeight",
        value: "maxaltitude"
      }
    ];

    return xAxisData.map(d => <option>{d.label}</option>);
  }

  getChartType() {
    switch (this.selectedChartType) {
      case ChartType.BarChart:
        return <BarChart data={[]} />;
      //   case ChartType.LineChart:
      //     return <LineChart data1={this.data1} data2={this.data2} />;
      default:
        return false;
    }
  }

  getData() {
    if (this.dataSource && this.xAxis) {
    }
  }

  render() {
    return (
      <div className={styles.outerContainer}>
        <div className={styles.dataSourceDropdown}>
          <select
            className={styles.dropdown}
            onChange={e => this.setDataSource(e.target.value)}
          >
            <option selected={true}>Select...</option>
            {this.getDatasourceDropdown()}
          </select>
        </div>
        <div className={styles.chartContainer}>
          <div
            className={styles.chartSelectorContainer}
            onClick={() => {
              this.setSelectedChartType(this.selectNextChartType());
            }}
          >
            <p>{this.selectedChartType + "  >"}</p>
          </div>
          <div className={styles.chart}>{this.getChartType()}</div>
        </div>
        <div className={styles.xAxisDropdown}>
          <select
            className={styles.dropdown}
            onChange={e => this.setXaxis(e.target.value)}
          >
            <option selected={true}>Select...</option>
            {this.getXAxisData()}
          </select>
        </div>
      </div>
    );
  }
}
