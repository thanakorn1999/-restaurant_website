import * as React from "react";
import { Outlet, Link, useLocation, useParams } from "react-router-dom";
//
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
//
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

//
import ListItemIcon from "@mui/material/ListItemIcon";
import TimelineIcon from "@mui/icons-material/Timeline";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
//
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SettingsIcon from "@mui/icons-material/Settings";
import FaceIcon from "@mui/icons-material/Face";
//
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function LayoutUser() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawer = (mode) => (event) => {
    setOpen(mode === "open");
  };
  const location = useLocation();
  const [drawerList, setDrawerList] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (location.pathname.startsWith("/user/my_restaurant/")) {
      setDrawerList([
        {
          title: "ดูแลลูกค้า",
          icon: <FaceIcon />,
          to: `/user/my_restaurant/${id}/customer`,
          type: "menu",
        },
        {
          title: "ครัว",
          icon: <EmojiFoodBeverageIcon />,
          to: `/user/my_restaurant/${id}/kitchen`,
          type: "menu",
        },
        {
          type: "divider",
        },
        {
          title: "เมนูอาหาร",
          icon: <MenuBookIcon />,
          to: `/user/my_restaurant/${id}/menu`,
          type: "menu",
        },
        {
          title: "ตั้งค่า",
          icon: <SettingsIcon />,
          to: `/user/my_restaurant/${id}/setting`,
          type: "menu",
        },
      ]);
    } else {
      setDrawerList([
        {
          title: "Dashboard",
          icon: <TimelineIcon />,
          to: "/user",
          type: "menu",
        },
        {
          title: "My Restaurant",
          icon: <StorefrontIcon />,
          to: "/user/my_restaurant",
          type: "menu",
        },

        {
          type: "divider",
        },
        {
          title: "Profile",
          icon: <AccountBoxIcon />,
          to: "/user/profile",
          type: "menu",
        },
        {
          title: "GlobalSetting",
          icon: <DisplaySettingsIcon />,
          to: "/user/global_setting",
          type: "menu",
        },
      ]);
    }
  }, [location]);

  const headerMenu = "ร้านค้าของฉัน";
  return (
    <>
      <Box
        sx={{ display: "flex", backgroundColor: grey[200], minHeight: `100vh` }}
      >
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer("open")}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              edge="start"
              component={Link}
              to="/user/my_restaurant"
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {headerMenu}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawer("close")}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ height: "100%" }}>
            {drawerList.map((item, index) =>
              item.type === "menu" ? (
                <ListItem
                  key={item.title + index}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ) : (
                <Divider />
              )
            )}

            {/* LOGOUT */}
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              style={{ position: "absolute", bottom: "0" }}
            >
              <ListItemButton
                component={Link}
                to={"/"}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Logout"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
