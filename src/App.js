import React, { useState } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import CompensationBar from "./components/CompensationBar";
import CompensationPie from "./components/CompensationPie";

// Should be derived from user inputs
const data = [
  {
    name: "Year 1",
    "Base Salary": 100000,
    Stock: 60000,
    Bonus: 10000,
  },
  {
    name: "Year 2",
    "Base Salary": 120000,
    Stock: 60000,
    Bonus: 10000,
  },
  {
    name: "Year 3",
    "Base Salary": 140000,
    Stock: 60000,
    Bonus: 10000,
  },
  {
    name: "Year 4",
    "Base Salary": 160000,
    Stock: 60000,
    Bonus: 10000,
  },
];

function App() {
  const [baseSalary, setBaseSalary] = useState(0);
  const [percentRaise, setPercentRaise] = useState(0);
  const [targetBonus, setTargetBonus] = useState(0);
  const [fourYrRSU, setFourYrRSU] = useState(0);
  const [vestPercent, setVestPercent] = useState(0);

  return (
    <Box component="span" m={1}>
      <img src={require("./logo.png")} alt="Logo" />

      <con rid container direction="row" justify="center" alignItems="center">
        <Grid container direction="column" justify="center" alignItems="center">
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
        </Grid>
      </con>

      <Grid container direction="column" justify="center" alignItems="center">
        <CompensationBar value={data}></CompensationBar>
        <CompensationPie value={data}></CompensationPie>
      </Grid>
    </Box>
  );
}

export default App;
