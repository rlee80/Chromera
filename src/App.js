import React, { PureComponent } from "react";
import { Button, Box, Grid, TextField } from "@material-ui/core";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Should be derived from user inputs
const data = [
  {
    name: "Year 1",
    "Base Salary": 100000,
    Stock: 60000,
    Bonus: 3000,
  },
  {
    name: "Year 2",
    "Base Salary": 120000,
    Stock: 60000,
    Bonus: 2400,
  },
  {
    name: "Year 3",
    "Base Salary": 140000,
    Stock: 60000,
    Bonus: 2400,
  },
  {
    name: "Year 4",
    "Base Salary": 160000,
    Stock: 60000,
    Bonus: 2400,
  },
];

function App() {
  return (
    <Box component="span" m={1}>
      <img src={require("./logo.png")} alt="Logo" />

      <Grid container direction="row" justify="center" alignItems="center">
        <Box>
          <con
            container
            d
            rid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <TextField
                id="filled-number"
                type="number"
                label="Base Salary (Yearly)"
                variant="filled"
                color="secondary"
              ></TextField>
              <TextField
                id="filled-number"
                type="number"
                label="Target Bonus"
                variant="filled"
              ></TextField>
              <TextField
                id="filled-number"
                type="number"
                label="Stock Award (4 Years)"
                variant="filled"
              ></TextField>
              <TextField
                id="filled-number"
                type="number"
                label="Signing Bonus"
                variant="filled"
              ></TextField>
            </Grid>
          </con>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <CompensationChart></CompensationChart>
          </Grid>
        </Box>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        ></Grid>
      </Grid>
    </Box>
  );
}

export default App;

class CompensationChart extends PureComponent {
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
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
        <Bar dataKey="Base Salary" stackId="a" fill="#8884d8" />
        <Bar dataKey="Stock" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Bonus" fill="#ffc658" />
      </BarChart>
    );
  }
}
