import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
// const drawerWidth = 240;
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
const navItems = [
  { title: "หน้าหลัก", goto: "/" },
  { title: "ข่าวสาร", goto: "/news" },
  { title: "แพคเกจ", goto: "/package" },
  { title: "เกี่ยวกับเรา", goto: "/about_us" },
];

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export function Navbar() {
  return (
    <>
      {/* color="transparent" */}
      {/* {...props} */}
      <ElevationScroll>
        {/* position="fixed" */}
        {/* <AppBar component="nav" sx={{ bgcolor: "white" }}>
          <Toolbar>
            <Container>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid>
                  <Box
                    component="img"
                    sx={{
                      height: 65,
                    }}
                    alt="Your logo."
                    src="logo.png"
                  />
                </Grid>
                <Grid>
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item, index) => (
                      <>
                        <Button
                          key={item}
                          sx={{ color: "#000" }}
                          component={Link}
                          to={item.goto}
                        >
                          {item.title}
                        </Button>
                        {index !== navItems.length - 1 ? (
                          <FiberManualRecordIcon
                            color="primary"
                            sx={{ px: 2, fontSize: 10 }}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar> */}
        <AppBar component="nav">
          <Toolbar>
            <Container sx={{ display: "flex" }}>
              {/* MOBILE */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              {/* DESKTOP */}
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item.title}
                  </Button>
                ))}
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Outlet />
    </>
  );
}
