import { Link } from "react-router-dom";

import {
  Grid,
  Container,
  Card,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";

export function Login() {
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
          <Grid item xs={11} md={8}>
            <Card>
              <Grid container direction="row" spacing={0}>
                {/* IMAGE */}
                <Grid item xs={12} md={6}>
                  <CardMedia
                    sx={{ height: `100%` }}
                    component="img"
                    image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    alt="green iguana"
                  />
                </Grid>
                {/* FORM LOGIN */}
                <Grid item xs={12} md={6}>
                  <Container sx={{ pt: 10, pb: 10 }}>
                    <Grid
                      container
                      justifyContent="center"
                      direction="row"
                      spacing={0}
                    >
                      <Grid item xs={10}>
                        <Typography
                          color="primary"
                          variant="subtitle1"
                          align="center"
                          sx={{ fontWeight: "bold", pb: 2 }}
                        >
                          เข้าสู่ระบบ
                        </Typography>
                        <TextField
                          id="input-username"
                          label="Username"
                          variant="outlined"
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="input-password"
                          label="Password"
                          type="password"
                          variant="outlined"
                          margin="dense"
                          fullWidth
                        />

                        <Grid
                          justifyContent="end"
                          container
                          direction="row"
                          spacing={0}
                        >
                          <Grid item>
                            <Button
                              component={Link}
                              to="/register"
                              variant="text"
                              sx={{ my: 2 }}
                            >
                              สมัครสมาชิก
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button variant="text" sx={{ my: 2 }}>
                              ลืมรหัสผ่าน ?
                            </Button>
                          </Grid>
                        </Grid>

                        <Button
                          fullWidth
                          variant="contained"
                          component={Link}
                          to="/user"
                          xs={{ borderRadius: 30 }}
                        >
                          ส่งข้อมูล
                        </Button>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
