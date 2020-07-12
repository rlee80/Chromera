import React, { useState } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import CompensationBar from "./components/CompensationBar";
import CompensationPie from "./components/CompensationPie";
import TaxPie from "./components/TaxPie";
import StatePicker from "./components/StatePicker";

function App() {
  const [baseSalary, setBaseSalary] = useState(0);
  const [percentRaise, setPercentRaise] = useState(0);
  const [targetBonus, setTargetBonus] = useState(0);
  const [fourYrRSU, setFourYrRSU] = useState(0);
  const [vestPercent, setVestPercent] = useState(0);

  // Should be derived from user inputs
  const data = [
    {
      name: "Year 1",
      "Base Salary": baseSalary,
      Stock: fourYrRSU,
      Bonus: targetBonus,
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

  return (
    <Box component="span" m={1}>
      <img src={require("./logo.png")} alt="Logo" />

      <con rid container direction="row" justify="center" alignItems="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <StatePicker></StatePicker>
          <TextField
            id="filled-number"
            type="number"
            label="Base Salary (Yearly)"
            variant="filled"
            color="secondary"
            value={baseSalary}
            onChange={(e) => {
              setBaseSalary(e.target.value);
            }}
          ></TextField>
          <TextField
            id="filled-number"
            type="number"
            label="Target Bonus"
            variant="filled"
            value={targetBonus}
            onChange={(e) => {
              setTargetBonus(e.target.value);
            }}
          ></TextField>
          <TextField
            id="filled-number"
            type="number"
            label="Stock Award (4 Years)"
            variant="filled"
            value={fourYrRSU}
            onChange={(e) => {
              setFourYrRSU(e.target.value);
            }}
          ></TextField>
        </Grid>
      </con>

      <Grid container direction="column" justify="center" alignItems="center">
        <text>Projected Total Compensation</text>
        <CompensationBar value={data}></CompensationBar>
        <text>Compensation Breakdown</text>
        <CompensationPie value={data}></CompensationPie>
      </Grid>

      <text>Tax Breakdown</text>
      <TaxPie value={data}></TaxPie>
    </Box>
  );
}

export default App;
