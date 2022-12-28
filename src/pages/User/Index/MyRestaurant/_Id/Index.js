import * as React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";

export function MyRestaurantId() {
  const [value, setValue] = React.useState("one");
  const { id } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold" }}
        noWrap
        component="div"
      >
        MyRestaurantId{id}
      </Typography>
      <Box sx={{ width: "100%", mt: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          {/* wrapped */}
          <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="start"
        spacing={0}
        sx={{ height: `100%` }}
      >
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}
