import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "../../../../../../axiosinstance";
import Icon from "@mui/material/Icon";
import {
  Grid,
  Card,
  Tabs,
  Tab,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Container,
  Typography,
  Box,
  InputAdornment,
  TextField,
  Dialog,
  useTheme,
  CardActionArea,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { DialogFood } from "./component/DialogFood";
import { DetailsSelectionFood } from "./component/DetailsSelectionFood";

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

  // DATA
  const [tabValue, setTabValue] = useState(0);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const [itemSelect, setItemSelect] = useState(null);
  const [modeDialog, setModeDialog] = useState("add");
  const [statusDialog, setStatusDialog] = useState(false);

  const filteredMenu =
    data[tabValue]?.listMenu?.filter(
      (item) =>
        item.detail.includes(query) ||
        item.title.includes(query) ||
        query === "" ||
        query === null
    ) ?? [];

  // METHODS
  const handleChangeTabs = (event, newValue) => {
    setQuery("");
    setTabValue(newValue);
  };

  const handleStatusDialogAdd = (mode) => {
    setModeDialog("add");
    setStatusDialog(mode);
  };

  const handleStatusDialogEdit = (mode) => {
    console.log(`handleStatusDialogEdit`, mode);
    setModeDialog("edit");
    setStatusDialog(mode);
  };

  const handleChangeSearch = (event) => {
    setQuery(event.target.value);
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

  // MyComponents
  const MyComponents = {
    getFoodCard: function getFoodCard(data) {
      if (data) {
        return (
          <>
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
              <CardActionArea
                onClick={() => setItemSelect({ ...data, type: "item" })}
              >
                {/* sx={{ height: 140 }} */}
                <CardMedia
                  style={{ aspectRatio: 4 / 3 }}
                  lazy
                  image={data?.img ?? ""}
                  title="green iguana"
                />
                {/* image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" */}

                <CardContent>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {data.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        );
      } else {
        return <>have no data</>;
      }
    },
  };

  return (
    <>
      <Grid container direction="row" spacing={2}>
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
          {/* HEADER/SEARCH */}
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 3, mb: 2 }}
          >
            <Grid item>
              <Grid container alignItems={"center"} spacing={1}>
                <Grid item>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {data[tabValue]?.title}
                  </Typography>
                </Grid>
                {tabValue !== 0 ? (
                  <Grid item>
                    <IconButton size="small">
                      <Icon color="primary">edit</Icon>
                    </IconButton>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                id="input-search"
                label="ค้นหา"
                variant="outlined"
                size="small"
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
            </Grid>
          </Grid>
          {/* TabPanel && listMenu */}
          <Container
            disableGutters
            sx={{ height: `70vh`, overflowY: "scroll" }}
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
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}
                >
                  {filteredMenu.length !== 0 ? (
                    filteredMenu.map((itemMenu, indexMenu) => (
                      <Grid
                        item
                        xs={6}
                        md={4}
                        xl={3}
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
          </Container>
        </Grid>
        {/* RIGHT */}
        <Grid item xs={12} md={4}>
          {/* BTN ADD */}

          <Button
            startIcon={<AddIcon />}
            variant="contained"
            disableElevation
            onClick={() => handleStatusDialogAdd(true)}
          >
            {/* () => sayHello('James') */}
            {/* handleStatusDialogAdd(true) */}
            {/* handleDialogOpen */}
            เพิ่มรายการใหม่
          </Button>
          {/* Details */}
          {/* handleOpenDialogEdit={() => } */}
          <Card variant="outlined" sx={{ mt: 2, height: `100%` }}>
            <Container sx={{ py: 2, height: `100%` }}>
              {itemSelect?.type === "item" ? (
                <DetailsSelectionFood
                  handleOpenDialogEdit={() => handleStatusDialogEdit(true)}
                  data={itemSelect}
                />
              ) : (
                ""
              )}
            </Container>
          </Card>
        </Grid>
      </Grid>
      {/* DIALOGS : ADD / EDIT FOOD */}
      <Dialog
        fullWidth
        maxWidth="md"
        open={statusDialog}
        onClose={() => handleStatusDialogAdd(false)}
      >
        <DialogFood
          mode={modeDialog}
          data={itemSelect}
          handleDialogClose={() => handleStatusDialogAdd(false)}
        />
      </Dialog>
    </>
  );
}
