import * as React from "react";
import { Link } from "react-router-dom";
// MUI
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

// import { styled } from "@mui/material/styles";
// const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
// const bgMainPage = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";
const styles = {
  containerBg: {
    // backgroundImage: `url(${bgMainPage})`,
    backgroundImage: `url(https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26585.jpg?w=1060&t=st=1671841737~exp=1671842337~hmac=b31bd7b6b3d8b5a269eb490f3dea5ad08e37f6d8ee544488d0cad30e7a167ba1)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center",
  },
};
const profitItems = [
  {
    imageUrl: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "หัวข้อ",
    detail: "รายละเอียดรายรายละเอียดรายรายละเอียดรายรายละเอียดรายรายละเอียดราย",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "หัวข้อ",
    detail: "รายลรายละเอียดรายรายละเอียดรายรายละเอียดรายะเอียดราย",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "หัวข้อ",
    detail: "รายละรายละเอียดรายรายละเอียดรายรายละเอียดรายเอียดราย",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "หัวข้อ",
    detail: "รายละเรายละเอียดรายรายละเอียดรายรายละเอียดรายอียดราย",
  },
];

export function Home() {
  return (
    <>
      <Container style={styles.containerBg} maxWidth={false}>
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={0}
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} md={9}>
            <Typography variant="h3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                pt: 1.5,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing
            </Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum is simply dummy text of the printing
            </Typography>
            <Grid
              container
              spacing={1}
              sx={{
                pt: 2,
              }}
            >
              <Grid item>
                <Button
                  disableElevation
                  variant="contained"
                  size="large"
                  component={Link}
                  color="primary"
                  to="/login"
                  sx={{ px: 5, borderRadius: 0 }}
                >
                  เข้าสู่ระบบ
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/register"
                  sx={{ px: 5, borderRadius: 0 }}
                >
                  สมัครสมาชิก
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* </img> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Typography variant="h5">
            ทุกตัวช่วยที่คุณต้องการอยู่ในระบบเดียว
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{ py: 5 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="start"
        spacing={3}
      >
        {profitItems.map((elm, index) => (
          <>
            <Grid item xs={12} md={2} key={`profit_${index}`}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="start"
              >
                <Grid item>
                  <Avatar
                    src={`${elm.imageUrl}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${elm.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={elm.title}
                    loading="lazy"
                    sx={{ width: 130, height: 130 }}
                  />
                </Grid>
              </Grid>

              <Typography
                variant="subtitle1"
                align="center"
                sx={{ fontWeight: "bold", py: 1 }}
              >
                {elm.title}
              </Typography>
              <Typography variant="subtitle1" align="center">
                {elm.detail}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
