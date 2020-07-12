import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class CompensationBar extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.value}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Base Salary" stackId="a" fill="#b14da5" />
        <Bar dataKey="Stock" stackId="a" fill="#6262f1" />
        <Bar dataKey="Bonus" stackId="a" fill="#8acdf7" />
      </BarChart>
    );
  }
}
