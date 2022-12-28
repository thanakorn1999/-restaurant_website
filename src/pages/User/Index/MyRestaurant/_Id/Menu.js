import * as React from "react";
//
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
//

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function Menu() {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const ObjectMenu = [
    {
      id: 1,
      title: "GROUP 1",
      detail: "detail GROUP 1",
      listMenu: [
        {
          id: 1,
          title: "FOOD 1",
          detail: "detail FOOD 1",
        },
        {
          id: 2,
          title: "FOOD 2",
          detail: "detail FOOD 2",
        },
      ],
    },
    {
      id: 2,
      title: "GROUP 2",
      detail: "detail GROUP 2",
      listMenu: [
        {
          id: 1,
          title: "FOOD 21",
          detail: "detail FOOD 21",
        },
        {
          id: 2,
          title: "FOOD 2",
          detail: "detail FOOD 22",
        },
      ],
    },
  ];
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
        alignItems="flex-start"
      >
        {/* LEFT */}
        <Grid item xs={8}>
          {/*  maxWidth: { xs: 320, sm: 480 }, */}
          {/* <Box sx={{ bgcolor: "background.paper" }}> */}
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{ mb: 5 }}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
          {/* </Box> */}
          {/* LIST MUNT */}
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
          <Grid container direction="row" alignItems="center" spacing={2}>
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((item, index) => (
              <Grid item xs={4}>
                <Card variant="outlined" sx={{ p: 5 }}>
                  ITEM {index}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* RIGHT */}
        <Grid container item xs={4} spacing={2}>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ p: 3 }}>
              ITEM
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ p: 5 }}>
              ITEM
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

// export default Login;
