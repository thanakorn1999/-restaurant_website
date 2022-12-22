import Container from "@mui/material/Container";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Home() {
  return (
    <>
      {/* maxWidth="sm" */}

      <Container>
        <Typography variant="h5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Typography>
        <Typography variant="subtitle1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </Typography>
        <Typography variant="subtitle1">
          Lorem Ipsum is simply dummy text of the printing
        </Typography>
        <Typography variant="subtitle1">
          Lorem Ipsum is simply dummy text of the printing
        </Typography>
        <Grid container spacing={1}>
          <Grid item>
            <Button variant="contained" size="large">
              เข้าร่าวม
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="large">
              Primary
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
