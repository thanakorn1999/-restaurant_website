import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
// import { styled } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import { createSvgIcon } from "@mui/material/utils";

// const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
// const drawerWidth = 240;

const navItems = [
  { title: "หน้าหลัก", goto: "/" },
  { title: "ข่าวสาร", goto: "/news" },
  { title: "แพคเกจ", goto: "/package" },
  { title: "เกี่ยวกับเรา", goto: "/about_us" },
];

export function Navbar() {
  return (
    <>
      <AppBar
        component="nav"
        color="transparent"
        elevation={0}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography>
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
                    // fontSize="inherit"
                    color="primary"
                    sx={{ px: 2, fontSize: 10 }}
                  />
                ) : (
                  ""
                )}
              </>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
