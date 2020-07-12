import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import CompensationBar from "./components/CompensationBar";
import CompensationPie from "./components/CompensationPie";
import TaxPie from "./components/TaxPie";
import StatePicker from "./components/StatePicker";
import RecentDataScatter from "./components/RecentDataScatter";

function getAnnualRaise(finalYr, baseSalary, percentRaise) {
  var output = baseSalary;
  while (finalYr-- > 1) {
    output = output * parseFloat(1.0 + (percentRaise * 1.0) / 100.0);
  }
  return output;
}

function App() {
  const [salaries, setSalaries] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });
  const [secondSalary, setSecondSalary] = useState(0);
  const [thirdSalary, setThirdSalary] = useState(0);
  const [fourthSalary, setFourthSalary] = useState(0);
  const [percentRaise, setPercentRaise] = useState(0);
  const [targetBonus, setTargetBonus] = useState(0);
  const [fourYrRSU, setFourYrRSU] = useState(0);
  const [vestPercent, setVestPercent] = useState(25);
  const [url, setURL] = useState("default");

  useEffect(() => {
    // addLink();
  });

  const data = [
    {
      name: "Year 1",
      "Base Salary": salaries.first,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 2",
      "Base Salary": salaries.second,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 3",
      "Base Salary": salaries.third,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
    {
      name: "Year 4",
      "Base Salary": salaries.fourth,
      Stock: fourYrRSU / (100 / vestPercent),
      Bonus: targetBonus,
    },
  ];

  //Save values to db for link
  function updateLink(url) {
    fetch("localhost:8080/api/data", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        url: url,
        base_salary: salaries.first,
        percent_raise: percentRaise,
        target_bonus: targetBonus,
        four_yr_RSU: fourYrRSU,
        vest_percent: vestPercent,
      },
    }).then((response) => setURL(response.url));
  }

  function addLink() {
    fetch("localhost:8080/api/data", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        base_salary: salaries.first,
        percent_raise: percentRaise,
        target_bonus: targetBonus,
        four_yr_RSU: fourYrRSU,
        vest_percent: vestPercent,
      },
    }).then((response) => setURL(response.url));
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img src={require("./assets/logo.png")} alt="Logo" />

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
          <text>Your market value {salaries.first}</text>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="filled-number"
            type="number"
            label="Salary (yearly)"
            variant="filled"
            color="secondary"
            value={salaries.first}
            onChange={(e) => {
              setSalaries({
                first: e.target.value,
                second: getAnnualRaise(2, e.target.value, percentRaise),
                third: getAnnualRaise(3, e.target.value, percentRaise),
                fourth: getAnnualRaise(4, e.target.value, percentRaise),
              });
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
              setSalaries({
                first: salaries.first,
                second: getAnnualRaise(2, salaries.first, e.target.value),
                third: getAnnualRaise(3, salaries.first, e.target.value),
                fourth: getAnnualRaise(4, salaries.first, e.target.value),
              });
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
        <Grid item xs={6}>
          <text>Projected Total Compensation</text>
          <CompensationBar value={data}></CompensationBar>
          <text>Compensation Breakdown</text>
          <CompensationPie value={data}></CompensationPie>
        </Grid>
        <Grid item xs={3}>
          <text>Tax Breakdown</text>
          <TaxPie value={data}></TaxPie>
          <text>Recent Entries</text>
          <RecentDataScatter value={data}></RecentDataScatter>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
