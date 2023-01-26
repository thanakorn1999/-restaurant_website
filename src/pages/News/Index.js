import { Grid, Container } from "@mui/material";

export function News() {
  return (
    <>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item xs={"auto"}>
            <Grid container>
              <Grid item>A</Grid>
              <Grid item>B</Grid>
            </Grid>
          </Grid>
          <Grid item xs={"auto"}>
            C
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

// export default Login;
