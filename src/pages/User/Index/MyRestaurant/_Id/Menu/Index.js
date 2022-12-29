import * as React from "react";
//
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import SwipeableViews from "react-swipeable-views";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

//
import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";

//
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { DialogFood } from "./component/DialogFood";
import { DialogGroupFood } from "./component/DialogGroupFood";

import SearchIcon from "@mui/icons-material/Search";
const MyComponents = {
  getFoodCard: function getFoodCard(data) {
    if (data) {
      return (
        <>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="div">
                {data.title}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                {data.detail}
              </Typography> */}
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </>
      );
    } else {
      return <>have no data</>;
    }
  },
};

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
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
  const ObjectMenu = [
    {
      id: 1,
      title: "GROUP 1",
      detail: "detail GROUP 1",
      listMenu: [
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
        },
        {
          id: 1,
          title: "FOOD 11",
          detail: "detail FOOD 11",
        },
        {
          id: 2,
          title: "FOOD 12",
          detail: "detail FOOD 12",
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
          title: "FOOD 22",
          detail: "detail FOOD 22",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
    {
      id: 3,
      title: "GROUP 3",
      detail: "detail GROUP 3",
      listMenu: [
        {
          id: 1,
          title: "FOOD 31",
          detail: "detail FOOD 31",
        },
      ],
    },
  ];

  const [statusDialog, setStatusDialog] = React.useState(false);

  const handleDialogOpen = () => {
    setStatusDialog(true);
    console.log(`handleDialogOpen`);
  };

  const handleDialogClose = () => {
    setStatusDialog(false);
  };
  return (
    <>
      {/* PAGE */}
      <Grid container direction="row" spacing={2} alignItems="flex-start">
        {/* LEFT */}
        <Grid item xs={8}>
          {/* <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}> */}
          <Grid container alignItems="center">
            <Grid item xs={11}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {ObjectMenu.map((item, index) => (
                  <Tab label={item.title} key={`tab${item.title}${index}`} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1}>
              <Button variant="text" color="primary">
                <AppsIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="end">
            <Grid item>
              <Container>
                {/* <TextField
                  margin="dense"
                  id="searchMenu"
                  label="searchMenu"
                  size="small"
                /> */}
                {/* <Box sx={{ display: "flex", alignItems: "flex-cender" }}>
                  <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-search"
                    label="ค้นหา"
                    variant="outlined"
                    size="small"
                  />
                </Box> */}
                <TextField
                  id="input-search"
                  label="ค้นหา"
                  variant="outlined"
                  size="small"
                  sx={{ mt: 3 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Container>
            </Grid>
          </Grid>
          {/* </Box> */}
          {/* LIST MUNT */}
          {ObjectMenu.map((item, index) => (
            <TabPanel
              value={value}
              index={index}
              dir={theme.direction}
              key={`TabPanel${item.title}${index}`}
            >
              {/* listMenu */}
              <Grid
                container
                direction="row"
                spacing={1}
                sx={{ height: `70vh`, overflowY: "scroll" }}
              >
                {item.listMenu.map((itemMenu, indexMenu) => (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={3}
                    key={`${itemMenu.title}${indexMenu}`}
                  >
                    {MyComponents.getFoodCard(itemMenu)}
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </Grid>
        {/* RIGHT */}
        <Grid container item xs={4} spacing={2}>
          <Grid item xs={12}>
            {/* <Card variant="outlined" sx={{ py: 3 }}> */}
            {/* <Container> */}
            <Grid container>
              <Grid item>
                <Button
                  startIcon={<AddIcon />}
                  variant="contained"
                  disableElevation
                  onClick={handleDialogOpen}
                >
                  เพิ่มรายการใหม่
                </Button>
              </Grid>
            </Grid>
            {/* </Container> */}
            {/* </Card> */}
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ py: 5 }}>
              <Container>DETAILS</Container>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      {/* DIALOGS */}
      <Dialog open={statusDialog} onClose={handleDialogClose}>
        <DialogFood handleDialogClose={handleDialogClose} />
        {/* <DialogGroupFood /> */}
      </Dialog>
    </>
  );
}

// export default Login;
