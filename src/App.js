import React, { useState } from "react";
import { Box, Grid, TextField, Button } from "@material-ui/core";
import CompensationBar from "./components/CompensationBar";
import CompensationPie from "./components/CompensationPie";
import TaxPie from "./components/TaxPie";
import StatePicker from "./components/StatePicker";

function getAnnualRaise(finalYr, baseSalary, percentRaise) {
  //DO yearly compensation calculations here
  var output = baseSalary;
  while (finalYr-- > 0) {
    output = output * (1 + (100 / percentRaise));
  }
  return output;
}

function App() {
  const [baseSalary, setBaseSalary] = useState(0);
  const [percentRaise, setPercentRaise] = useState(0);
  const [targetBonus, setTargetBonus] = useState(0);
  const [fourYrRSU, setFourYrRSU] = useState(0);
  const [vestPercent, setVestPercent] = useState(25);

  const data = [
    {
      name: "Year 1",
      "Base Salary": baseSalary,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 2",
      "Base Salary": getAnnualRaise(2, baseSalary, percentRaise),
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 3",
      "Base Salary": getAnnualRaise(3, baseSalary, percentRaise),
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 4",
      "Base Salary": getAnnualRaise(4, baseSalary, percentRaise),
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
  ];

  //Save values to db for link
  function updateLink() {}

  return (
    <Box component="span" m={1}>
      <img src={require("./logo.png")} alt="Logo" />

      <text>URL to Share & Save:</text>
      <TextField
        id="outlined-read-only-input"
        defaultValue="http://localhost:3000/fds398"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Copy
      </Button>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid container direction="column" justify="center" alignItems="center">
          <StatePicker></StatePicker>
          <TextField
            id="filled-number"
            type="number"
            label="Salary (yearly)"
            variant="filled"
            color="secondary"
            value={baseSalary}
            onChange={(e) => {
              setBaseSalary(e.target.value);
              updateLink();
            }}
          ></TextField>
          <TextField
            id="filled-number"
            type="number"
            label="Annual Raise (%)"
            variant="filled"
            value={percentRaise}
            onChange={(e) => {
              setPercentRaise(e.target.value);
              updateLink();
            }}
          ></TextField>
          <TextField
            id="filled-number"
            type="number"
            label="Performance Bonus ($)"
            variant="filled"
            value={targetBonus}
            onChange={(e) => {
              setTargetBonus(e.target.value);
              updateLink();
            }}
          ></TextField>
          <TextField
            id="filled-number"
            type="number"
            label="Stock Award Value (4 years)"
            variant="filled"
            value={fourYrRSU}
            onChange={(e) => {
              setFourYrRSU(e.target.value);
              updateLink();
            }}
          ></TextField>
          <TextField
            id="filled-number"
            type="number"
            label="Yearly Vest Amount (%)"
            variant="filled"
            value={vestPercent}
            onChange={(e) => {
              setVestPercent(e.target.value);
              updateLink();
            }}
          ></TextField>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <text>Projected Total Compensation</text>
          <CompensationBar value={data}></CompensationBar>
          <text>Compensation Breakdown</text>
          <CompensationPie value={data}></CompensationPie>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      ></Grid>

      <text>Tax Breakdown</text>
      <TaxPie value={data}></TaxPie>
    </Box>
  );
}

export default App;
