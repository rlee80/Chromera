import React from "react";
import { Button, Box, Grid, TextField } from "@material-ui/core";
import {
  LineChart,
  Line,
  BarChart,
  PieChart,
  ScatterChart,
  AreaChart,
} from "recharts";

function App() {
  return (
    <Box component="span" m={1}>
      <img src={require("./logo.png")} alt="Logo" />

      <Grid container direction="row" justify="center" alignItems="center">
        <Box>
          {/* Add Salary  */}
          {/* Main 2 Columns */} {/* Main Column 1 */}
          <con
            container
            d
            justify="center"
            ali
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {/* Column 1 Subcolumn */}
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
          {/* Column 1 Subcolumn */}
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          ></Grid>
        </Box>

        {/* Main Column 2 */}
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
