import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  Typography,
  Grid,
  Card,
  TextField,
  Container,
  Avatar,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { LineChart } from "../../../component/Chart/Line";
import { PieChart } from "../../../component/Chart/Pie";
import { useEffect, useState } from "react";
const CardRounded = styled(Card)`
  border-radius: 10px;
`;

const useStyles = makeStyles((theme) => ({
  rounded: {
    borderRadius: `5px`,
  },
}));

const MyComponents = {
  DataCard: function DataCard(data) {
    if (data) {
      return (
        <CardRounded elevation={0}>
          <Container sx={{ py: 1 }}>
            <Typography variant="subtitle2" component="div" fontWeight="bold">
              {data.label}
            </Typography>
            <Typography variant="h6" component="div" sx={{ pt: 1, pb: 0.5 }}>
              {data.value.toLocaleString()}
            </Typography>
            <Typography variant="caption" component="div" sx={{ py: 1 }}>
              30% เทียบกับ
            </Typography>
          </Container>
        </CardRounded>
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
            sx={{ py: 0.5 }}
          >
            <Grid item xs={3}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle2" component="div" fontWeight="bold">
                ต้มยำกุ้ง
              </Typography>
              <Typography variant="caption" component="div">
                100
              </Typography>
            </Grid>
          </Grid>
        </>
      );
    }
  },
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function Dashboard() {
  const classes = useStyles();
  const [dateDashboard, setDashboard] = useState(null);
  const [dateDashboardTopTen, setDashboardTopTen] = useState(null);
  useEffect(() => {
    const dataFromAPI = {
      labels: [
        "20/01/2565",
        "21/01/2565",
        "22/01/2565",
        "23/01/2565",
        "24/01/2565",
      ],
      sumMyRestaurant: [
        {
          label: "ร้านที่ 1",
          data: [400, 300, 350, 200, 280],
        },
        {
          label: "ร้านที่ 2",
          data: [100, 220, 150, 400, 190],
        },
        {
          label: "ร้านที่ 3",
          data: [110, 223, 140, 300, 290],
        },
        {
          label: "ร้านที่ 4",
          data: [400, 300, 350, 200, 280],
        },
        {
          label: "ร้านที่ 5",
          data: [100, 220, 150, 400, 190],
        },
        {
          label: "ร้านที่ 6",
          data: [110, 223, 140, 300, 290],
        },
        {
          label: "ร้านที่ 7",
          data: [400, 300, 350, 200, 280],
        },
        {
          label: "ร้านที่ 8",
          data: [100, 220, 150, 400, 190],
        },
        {
          label: "ร้านที่ 9",
          data: [110, 223, 140, 300, 290],
        },
        {
          label: "ร้านที่ 10",
          data: [100, 220, 150, 400, 190],
        },
        {
          label: "ร้านที่ 11",
          data: [110, 223, 140, 300, 290],
        },
      ],
      topTenFood: [
        {
          labels: [
            `ต้มยำกุ้ง 1`,
            `ต้มยำกุ้ง 2`,
            `ต้มยำกุ้ง 3`,
            `ต้มยำกุ้ง 4`,
            `ต้มยำกุ้ง 5`,
          ],
          data: [400, 300, 350, 200, 280],
        },
      ],
    };
    setDashboardTopTen({
      labels: [
        `ต้มยำกุ้ง 1`,
        `ต้มยำกุ้ง 2`,
        `ต้มยำกุ้ง 3`,
        `ต้มยำกุ้ง 4`,
        `ต้มยำกุ้ง 5`,
      ],
      datasets: [
        {
          label: "top 10 อาหาร",
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });

    const color = [
      `#3C6255`,
      `#A6BB8D`,
      `#FBC252`,
      `#82AAE3`,
      `#91D8E4`,
      `#FF8E9E`,
      `#F9B5D0`,
      `#453C67`,
      `#6D67E4`,
      `#46C2CB`,
      `#F2F7A1`,
    ];
    dataFromAPI.topTenFood.backgroundColor = [...color];
    dataFromAPI.topTenFood.borderColor = [...color];

    let bufferDatasets = [];
    dataFromAPI.sumMyRestaurant.forEach((elm, index) => {
      bufferDatasets.push({
        label: elm.label,
        data: elm.data,
        borderColor: color[index],
        backgroundColor: "white",
      });
    });

    setDashboard({
      labels: dataFromAPI.labels,
      sumMyRestaurant: bufferDatasets,
      topTenFood: dataFromAPI.topTenFood,
    });
  }, []);

  // DATE PICKER
  // DATE PICKER
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
        <Typography variant="h6" gutterBottom sx={{ pb: 2 }}>
          Overview
        </Typography>
        {/* DATE-PICKER */}
        <Grid container alignContent="flex-start" spacing={1}>
          <Grid item>
            <MobileDatePicker
              fullWidth
              label="วันที่เริ่ม"
              inputFormat="MM/DD/YYYY"
              value={dateStart}
              onChange={handleChangeDateStart}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item>
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
          <Grid item xs={12} md={8}>
            {/* SUM CARD */}
            <Grid container alignContent="flex-start" spacing={1}>
              <Grid item xs={12} md={3}>
                {MyComponents.DataCard({
                  label: "ยอดรวมทั้งหมด",
                  value: 123456789,
                })}
              </Grid>
              <Grid item xs={12} md={3}>
                {MyComponents.DataCard({
                  label: "จำนวนโต๊ะทั้งหมด",
                  value: 12345,
                })}
              </Grid>
              <Grid item xs={12} md={3}>
                {MyComponents.DataCard({ label: "รายได้ทั้งหมด c", value: 1 })}
              </Grid>
              <Grid item xs={12} md={3}>
                {MyComponents.DataCard({ label: "รายได้ทั้งหมด d", value: 1 })}
              </Grid>
            </Grid>
            {/* CHART */}
            <Grid
              container
              alignContent="flex-start"
              spacing={1}
              sx={{ py: 1 }}
            >
              <Grid item xs={12} md={8}>
                <CardRounded elevation={0} sx={{ minHeight: `100%` }}>
                  <Container sx={{ py: 1 }}>
                    <Typography
                      variant="subtitle2"
                      component="div"
                      fontWeight="bold"
                    >
                      ยอดขายของร้านเรา
                    </Typography>
                    {dateDashboard !== null ? (
                      <LineChart
                        labels={dateDashboard.labels}
                        datasets={dateDashboard.sumMyRestaurant}
                      />
                    ) : (
                      ""
                    )}
                  </Container>
                </CardRounded>
              </Grid>
              <Grid item xs={12} md={4}>
                <CardRounded elevation={0} sx={{ minHeight: `100%` }}>
                  <Container sx={{ py: 1 }}>
                    <Typography
                      variant="subtitle2"
                      component="div"
                      fontWeight="bold"
                    >
                      รายชื่อร้านค้าของเรา
                    </Typography>
                    <Container
                      disableGutters
                      sx={{ overflow: "auto", height: 220 }}
                    >
                      {dateDashboard?.sumMyRestaurant?.map((item, index) => (
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justifyContent="flex-star"
                          spacing={1}
                          sx={{ py: 0.2 }}
                        >
                          <Grid item>
                            <Card
                              style={{
                                backgroundColor: item.borderColor,
                                height: `15px`,
                                width: `15px`,
                              }}
                            ></Card>
                          </Grid>
                          <Grid item>{item.label}</Grid>
                        </Grid>
                      )) ?? ""}
                    </Container>
                  </Container>
                </CardRounded>
              </Grid>
            </Grid>
            <CardRounded elevation={0}>
              <Container>
                <TableContainer component={Paper} elevation={0}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </CardRounded>
          </Grid>

          {/* Right */}
          <Grid item xs={12} md={4}>
            <CardRounded elevation={0}>
              <Container sx={{ py: 1 }}>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  component="div"
                  sx={{ pb: 2 }}
                >
                  Top 10 อาหารขายดี
                </Typography>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                  sx={{ py: 1 }}
                >
                  <Grid item xs={12} md={8}>
                    {dateDashboardTopTen !== null ? (
                      <PieChart datasets={dateDashboardTopTen} />
                    ) : (
                      ""
                    )}
                  </Grid>
                </Grid>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  component="div"
                  sx={{ pb: 2 }}
                >
                  รายชื่อ
                </Typography>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
                  MyComponents.FoodCard(item)
                )}
              </Container>
            </CardRounded>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
}

// export default Login;
