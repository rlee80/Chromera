import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Federal Tax", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#C7A5F1", "#858C94", "#C6CCE3", "#9FA8E0"];

export default class TaxPie extends PureComponent {
  render() {
    return (
      <PieChart width={350} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
