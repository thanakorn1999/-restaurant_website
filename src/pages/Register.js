import { Link } from "react-router-dom";

import {
  Grid,
  Container,
  Card,
  Typography,
  Button,
  TextField,
} from "@mui/material";

export function Register() {
  return (
    <>
      <Container maxWidth={false}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={0}
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={10} md={8}>
            <Card>
              <Container>
                <Typography
                  color="primary"
                  variant="subtitle1"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  สมัครสมาชิก
                </Typography>
                <TextField
                  id="input-username"
                  label="Username"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
                <TextField
                  id="input-username"
                  label="Username"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
                <Button
                  component={Link}
                  to="/login"
                  fullWidth
                  variant="contained"
                  sx={{ my: 2 }}
                >
                  สมัครสมาชิก
                </Button>
              </Container>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
