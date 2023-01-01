import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

const MyComponents = {
  DataCard: function DataCard(data) {
    if (data) {
      return (
        <Card elevation={0}>
          <Container>
            <Typography variant="subtitle1" component="div">
              header
            </Typography>
            <Typography variant="h6" component="div">
              {data}%
            </Typography>
          </Container>
        </Card>
      );
    }
  },
  FoodCard: function FoodCard(data) {
    if (data) {
      return (
        <>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item sx={3}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
            </Grid>
            <Grid item sx={9}>
              <Typography variant="h6" component="div">
                Name
              </Typography>
              <Typography variant="caption" component="div">
                00000
              </Typography>
            </Grid>
          </Grid>
        </>
      );
    }
  },
};

export function Dashboard() {
  const [dateStart, setDateStart] = React.useState(
    dayjs("2014-08-11T21:11:54")
  );
  const [dateEnd, setDateEnd] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChangeDateStart = (newValue) => {
    setDateStart(newValue);
  };
  const handleChangeDateEnd = (newValue) => {
    setDateEnd(newValue);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography variant="subtitle1" gutterBottom>
          Dashboard
        </Typography>
        {/* DATE-PICKER */}
        <Grid container alignContent="flex-start" spacing={1}>
          <Grid item sx={12} md={4}>
            <MobileDatePicker
              fullWidth
              label="วันที่เริ่ม"
              inputFormat="MM/DD/YYYY"
              value={dateStart}
              onChange={handleChangeDateStart}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item sx={12} md={4}>
            <MobileDatePicker
              fullWidth
              label="วันที่สิ้นสุด"
              inputFormat="MM/DD/YYYY"
              value={dateEnd}
              onChange={handleChangeDateEnd}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
        <Grid container alignContent="flex-start" spacing={1} sx={{ my: 1 }}>
          <Grid item sx={12} md={8}>
            {/* SUM CARD */}
            <Grid container alignContent="flex-start" spacing={1}>
              {[3, 2, 3, 4].map((item, index) => (
                <Grid item sx={12} md={3}>
                  {MyComponents.DataCard(item)}
                </Grid>
              ))}
            </Grid>
            {/* CHART */}
            <Grid
              container
              alignContent="flex-start"
              spacing={1}
              sx={{ py: 2 }}
            >
              <Grid item sx={12} md={6}>
                <Card>ยอดขายของร้านเรา</Card>
              </Grid>
              <Grid item sx={12} md={6}>
                <Card></Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={12} md={4}>
            <Card elevation={0}>
              <Container sx={{ py: 1 }}>
                <Typography variant="subtitle2" component="div">
                  Top 10 อาหารขายดี
                </Typography>
                {[3, 2, 3, 4].map((item, index) => MyComponents.FoodCard(item))}
              </Container>
            </Card>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
}

// export default Login;
