import React, { useState } from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import CompensationBar from "./components/CompensationBar";
import CompensationPie from "./components/CompensationPie";
import TaxPie from "./components/TaxPie";
import StatePicker from "./components/StatePicker";

function getAnnualRaise(finalYr, baseSalary, percentRaise) {
  //DO yearly compensation calculations here
  var output = baseSalary;
  while (finalYr-- > 0) {
    output = output * (1 + percentRaise / 100);
  }
  return output;
}

function App() {
  const [baseSalary, setBaseSalary] = useState(0);
  const [secondSalary, setSecondSalary] = useState(0);
  const [thirdSalary, setThirdSalary] = useState(0);
  const [fourthSalary, setFourthSalary] = useState(0);
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
      "Base Salary": secondSalary,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 3",
      "Base Salary": thirdSalary,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 4",
      "Base Salary": fourthSalary,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
  ];

  //Save values to db for link
  function updateLink() {}

  //updates the salaries
  function updateSalaries() {
    setSecondSalary(getAnnualRaise(2, baseSalary, percentRaise));
    setSecondSalary(getAnnualRaise(3, baseSalary, percentRaise));
    setSecondSalary(getAnnualRaise(4, baseSalary, percentRaise));
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={8}>
          <text>Salary Statistics</text>
          <StatePicker></StatePicker>
        </Grid>
        <Grid item xs={4}>
          <text>Your market value placeholder</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="filled-number"
            type="number"
            label="Salary (yearly)"
            variant="filled"
            color="secondary"
            value={baseSalary}
            onChange={(e) => {
              setBaseSalary(e.target.value);
              updateSalaries();
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
              updateSalaries();
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
            type="number"
            label="Yearly Vest Amount (%)"
            type="number"
            label="Yearly Vest Amount (%)"
            type="number"
            label="Yearly Vest Amount (%)"
            type="number"
            label="Yearly Vest Amount (%)"
            type="number"
            label="Yearly Vest Amount (%)"
            type="number"
            label="Yearly Vest Amount (%)"
            type="number"
            label="Yearly Vest Amount (%)"
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
        <Grid item xs={6}>
          <text>Projected Total Compensation</text>
          <CompensationBar value={data}></CompensationBar>
          <text>Compensation Breakdown</text>
          <CompensationPie value={data}></CompensationPie>{" "}
        </Grid>
        <Grid item xs={3}>
          <text>Tax Breakdown</text>
          <TaxPie value={data}></TaxPie>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
