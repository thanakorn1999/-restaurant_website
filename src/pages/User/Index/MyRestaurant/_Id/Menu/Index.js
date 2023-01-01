import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../../../../../../axiosinstance";

import {
  Grid,
  Card,
  Tabs,
  Tab,
  CardMedia,
  CardContent,
  Button,
  Container,
  Typography,
  Box,
  InputAdornment,
  TextField,
  Dialog,
  useTheme,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import { DialogFood } from "./component/DialogFood";

const MyComponents = {
  getFoodCard: function getFoodCard(data) {
    if (data) {
      return (
        <>
          <Card variant="outlined" sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              lazy="true"
              image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="div">
                {data.title}
              </Typography>
            </CardContent>
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

  // TAB
  const [tabValue, setTabValue] = useState(0);
  const handleChangeTabs = (event, newValue) => {
    setQuery("");
    setTabValue(newValue);
  };

  // DIALOG
  const [statusDialog, setStatusDialog] = useState(false);
  const handleDialogOpen = () => {
    setStatusDialog(true);
  };
  const handleDialogClose = () => {
    setStatusDialog(false);
  };

  // DATA FROM API
  useEffect(() => {
    axios
      .get("/generate")
      .then((response) => {
        if (response.data.success === "success") {
          setData(response.data.message);
        } else {
          console.log(response.data.message_th);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const filteredMenu =
    data[tabValue]?.listMenu?.filter(
      (item) =>
        item.detail.includes(query) ||
        item.title.includes(query) ||
        query === "" ||
        query === null
    ) ?? [];
  const handleChangeSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      {/* PAGE */}
      <Grid container direction="row" spacing={2} alignItems="flex-start">
        {/* LEFT */}
        <Grid item xs={12} md={8}>
          {/* TABS */}
          <Grid container alignItems="center">
            <Grid item xs={11} sx={{ overflow: "hidden", width: `300px` }}>
              <Tabs
                value={tabValue}
                onChange={handleChangeTabs}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {data.map((item, index) => (
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
          {/* SEARCH */}
          <Grid container justifyContent="end">
            <Grid item>
              <Container>
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
                  value={query}
                  onChange={handleChangeSearch}
                />
              </Container>
            </Grid>
          </Grid>
          {/* TabPanel && listMenu */}
          <Grid
            container
            justifyContent="end"
            sx={{ height: `70vh`, overflowY: "scroll", mt: 1 }}
          >
            {data.map((item, index) => (
              <TabPanel
                value={tabValue}
                index={index}
                dir={theme.direction}
                key={`TabPanel${item.title}${index}`}
              >
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-star"
                  spacing={1}
                >
                  {filteredMenu.length !== 0 ? (
                    filteredMenu.map((itemMenu, indexMenu) => (
                      <Grid
                        item
                        xs={6}
                        md={3}
                        key={`${itemMenu.title}${indexMenu}`}
                      >
                        {MyComponents.getFoodCard(itemMenu)}
                      </Grid>
                    ))
                  ) : (
                    <Grid item key={`notf`}>
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "center" }}
                      >
                        ไม่พบรายการที่ค้นหา
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </TabPanel>
            ))}
          </Grid>
        </Grid>
        {/* RIGHT */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            {/* ADD */}
            <Grid item xs={12}>
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
            </Grid>
            {/* Details */}
            <Grid item xs={12}>
              <Card variant="outlined" sx={{ py: 5 }}>
                <Container>{data?.date_create ?? "Loading"}</Container>
              </Card>
            </Grid>
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
