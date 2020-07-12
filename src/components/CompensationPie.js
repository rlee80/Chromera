import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

// const data = [
//   { name: "Year 1", value: 500 },
//   { name: "Year 2", value: 400 },
//   { name: "Year 3", value: 600},
//   { name: "Year 4", value: 300 },
// ];
const COLORS = ["#CB4DBC", "#624975", "#D8C7F0"];

export default class CompensationPie extends PureComponent {

  constructor(props){
    super(props);
  }
  
  render() {
    var data = [
      { name: "Year 1", value: this.props.value[0]["Base Salary"] ? this.props.value[0]["Base Salary"]: 200},
      { name: "Year 2", value: this.props.value[1]["Base Salary"] ? this.props.value[1]["Base Salary"]: 200},
      { name: "Year 3", value: this.props.value[2]["Base Salary"] ? this.props.value[2]["Base Salary"]: 200},
      { name: "Year 4", value: this.props.value[3]["Base Salary"] ? this.props.value[3]["Base Salary"]: 200 },
    ];
    console.log(data);
    return (
      <PieChart width={300} height={400} onMouseEnter={this.onPieEnter}>
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
