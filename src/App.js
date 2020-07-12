import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
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
  const [data, setData] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    percentRaise: 0,
    targetBonus: 0,
    fourYrRSU: 0,
    vestPercent: 25,
  });

  const [url, setURL] = useState("default");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // console.log(window.location.href);

    //get current word url
    var fullurl = window.location.href;
    fullurl = fullurl.split("/");
    var cururl = fullurl[fullurl.length - 1];

    console.log(loaded);
    if (!loaded) {
      //url exists
      if (cururl.length > 0) {
        loadData(cururl);
      } else {
        addLink();
      }
    }

    // addLink();
  });

  useEffect(() => {
    updateLink(url);
  }, [data]);

  const graphData = [
    {
      name: "Year 1",
      "Base Salary": data.first,
      Stock: data.fourYrRSU / (100 / data.vestPercent),
      Bonus: data.targetBonus,
    },
    {
      name: "Year 2",
      "Base Salary": data.second,
      Stock: data.fourYrRSU / (100 / data.vestPercent),
      Bonus: data.targetBonus,
    },
    {
      name: "Year 3",
      "Base Salary": data.third,
      Stock: data.fourYrRSU / (100 / data.vestPercent),
      Bonus: data.targetBonus,
    },
    {
      name: "Year 4",
      "Base Salary": data.fourth,
      Stock: data.fourYrRSU / (100 / data.vestPercent),
      Bonus: data.targetBonus,
    },
  ];

  //Save values to db for link
  function updateLink(url) {
    // fetch("http://localhost:8080/api/data", {
    //   method: "PUT", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     url: url,
    //     base_salary: parseInt(data.first),
    //     percent_raise: parseInt(data.percentRaise),
    //     target_bonus: parseInt(data.targetBonus),
    //     four_yr_RSU: parseInt(data.fourYrRSU),
    //     vest_percent: parseInt(data.vestPercent),
    //   }),
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(result) {
    //   console.log(result);
    // })
    // .catch(err => console.log(err));
  }

  function addLink() {
    // fetch("http://localhost:8080/api/data", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body:JSON.stringify({
    //     base_salary: data.first,
    //     percent_raise: data.percentRaise,
    //     target_bonus: data.targetBonus,
    //     four_yr_RSU: data.fourYrRSU,
    //     vest_percent: data.vestPercent })
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(data) {
    //   window.location.href+=data.data.url;
    //   setURL(data.data.url)
    // })
    // .catch(err => console.log(err));
  }

  function loadData(url) {
    // fetch("http://localhost:8080/api/data/"+url, {
    //   method: "GET", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(result) {
    //   setData({
    //     first: result.base_salary,
    //     second: getAnnualRaise(2, result.base_salary, result.percent_raise),
    //     third: getAnnualRaise(3, result.base_salary, result.percent_raise),
    //     fourth: getAnnualRaise(4, result.base_salary, result.percent_raise),
    //     percentRaise: result.percent_raise,
    //     targetBonus: result.target_bonus,
    //     fourYrRSU: result.four_yr_RSU,
    //     vestPercent: result.vest_percent,
    //   })
    //   setURL(url);
    //   setLoaded(true);
    // })
    // .catch(err => console.log(err));
  }

  function loadRecentData(){
    var recentData = [{
      "base_salary": 120000,
      "four_yr_RSU": 45000
    },
    {
      "base_salary": 21,
      "four_yr_RSU": 30
    },
    {
      "base_salary": 150000,
      "four_yr_RSU": 45000
    }];
    // fetch("http://localhost:8080/api/recentData", {
    //   method: "GET", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(result) {console.log(result); recentData = result;});
    return recentData;
  }

  return (
    <div>
      <Grid container spacing={2}>
        
        <img src={require("./assets/logo.png")} alt="Logo" />

        <Grid item xs={4}>
          <h4>URL to Share & Save:</h4>
          <TextField
            id="outlined-read-only-input"
            defaultValue={window.location.href}
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
          <h2>Salary Statistics</h2>
          <StatePicker></StatePicker>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              backgroundColor: "#7f6096",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <h2 style={{ color: "#fff" }}>Your Market Value: </h2>
            <h1 style={{ color: "#fff", fontSize: 46 }}>${data.first}</h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Box p={2}>
            <div
              style={{
                backgroundColor: "#e1e4f0",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <CurrencyTextField
                label="Salary (yearly)"
                color="secondary"
                currencySymbol="$"
                value={data.first}
                onChange={(e) => {
                  setData({
                    first: parseFloat(e.target.value),
                    second: getAnnualRaise(
                      2,
                      e.target.value,
                      data.percentRaise
                    ),
                    third: getAnnualRaise(3, e.target.value, data.percentRaise),
                    fourth: getAnnualRaise(
                      4,
                      e.target.value,
                      data.percentRaise
                    ),
                    percentRaise: data.percentRaise,
                    targetBonus: data.targetBonus,
                    fourYrRSU: data.fourYrRSU,
                    vestPercent: data.vestPercent,
                  });
                }}
              ></CurrencyTextField>
            </div>
          </Box>

          <Box p={2}>
            <div
              style={{
                backgroundColor: "#e1e4f0",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <CurrencyTextField
                label="Annual Raise (%)"
                currencySymbol="%"
                value={data.percentRaise}
                onChange={(e) => {
                  setData({
                    first: data.first,
                    second: getAnnualRaise(2, data.first, e.target.value),
                    third: getAnnualRaise(3, data.first, e.target.value),
                    fourth: getAnnualRaise(4, data.first, e.target.value),
                    percentRaise: e.target.value,
                    targetBonus: data.targetBonus,
                    fourYrRSU: data.fourYrRSU,
                    vestPercent: data.vestPercent,
                  });
                }}
              ></CurrencyTextField>
            </div>
          </Box>
          <Box p={2}>
            <div
              style={{
                backgroundColor: "#e1e4f0",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <CurrencyTextField
                label="Performance Bonus ($)"
                currencySymbol="$"
                value={data.targetBonus}
                onChange={(e) => {
                  setData({
                    first: data.first,
                    second: data.second,
                    third: data.third,
                    fourth: data.fourth,
                    percentRaise: data.percentRaise,
                    targetBonus: e.target.value,
                    fourYrRSU: data.fourYrRSU,
                    vestPercent: data.vestPercent,
                  });
                  // updateLink(url);
                }}
              ></CurrencyTextField>
            </div>
          </Box>
          <Box p={2}>
            <div
              style={{
                backgroundColor: "#e1e4f0",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <CurrencyTextField
                label="Stock Award Value (4 years)"
                currencySymbol="$"
                value={data.fourYrRSU}
                onChange={(e) => {
                  setData({
                    first: data.first,
                    second: data.second,
                    third: data.third,
                    fourth: data.fourth,
                    percentRaise: data.percentRaise,
                    targetBonus: data.targetBonus,
                    fourYrRSU: e.target.value,
                    vestPercent: data.vestPercent,
                  });
                  // updateLink(url);
                }}
              ></CurrencyTextField>
            </div>
          </Box>
          <Box p={2}>
            <div
              style={{
                backgroundColor: "#e1e4f0",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <CurrencyTextField
                label="Yearly Vest Amount (%)"
                currencySymbol="%"
                value={data.vestPercent}
                onChange={(e) => {
                  setData({
                    first: data.first,
                    second: data.second,
                    third: data.third,
                    fourth: data.fourth,
                    percentRaise: data.percentRaise,
                    targetBonus: data.targetBonus,
                    fourYrRSU: data.fourYrRSU,
                    vestPercent: e.target.value,
                  });
                  // updateLink(url);
                }}
              ></CurrencyTextField>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{ backgroundColor: "#e1e4f0", padding: 2, borderRadius: 10 }}
          >
            <h3>Projected Total Compensation</h3>
            <CompensationBar value={graphData}></CompensationBar>
          </div>
          <div
            style={{
              backgroundColor: "#e1e4f0",
              padding: 2,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <h3>Compensation Breakdown</h3>
            <CompensationPie value={graphData}></CompensationPie>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{ backgroundColor: "#e1e4f0", padding: 2, borderRadius: 10 }}
          >
            <h3>Tax Breakdown</h3>
            <TaxPie value={graphData}></TaxPie>
          </div>
          <div
            style={{
              backgroundColor: "#e1e4f0",
              padding: 2,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            <h3>Recent Entries</h3>
            <RecentDataScatter value={graphData} recentData = {loadRecentData()} ></RecentDataScatter>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
