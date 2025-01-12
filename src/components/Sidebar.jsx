import { Box, Stack, Switch } from "@mui/material";
import { Link, useLocation } from "react-router";
import { useThemeStore } from "../utils/userStore";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";

function Sidebar() {
  const { theme, toggleTheme } = useThemeStore();
  const location = useLocation();
  const imageArray = [
    {
      id: "1",
      srcBlack: "src/assets/Icons/home.png",
      srcWhite: "src/assets/Icons/home-black.png",
      alt: "home",
      text: "خانه",
      path: "/home",
    },
    {
      id: "2",
      srcBlack: "src/assets/Icons/user.png",
      srcWhite: "src/assets/Icons/user-black.png",
      alt: "user",
      text: "کاربری",
      path: "/user",
    },
    {
      id: "3",
      srcBlack: "src/assets/Icons/truck.png",
      srcWhite: "src/assets/Icons/truck-black.png",
      alt: "truck",
      text: "ماشین ها",
      path: "/trucks",
    },
    {
      id: "4",
      srcBlack: "src/assets/Icons/wheel.png",
      srcWhite: "src/assets/Icons/wheel-black.png",
      alt: "driver",
      text: "راننده ها",
      path: "/drivers",
    },
    {
      id: "5",
      srcBlack: "src/assets/Icons/device.png",
      srcWhite: "src/assets/Icons/device-black.png",
      alt: "devices",
      text: "دستگاه ها",
      path: "/devices",
    },
    {
      id: "6",
      srcBlack: "src/assets/Icons/lock-light.png",
      srcWhite: "src/assets/Icons/lock-black.png",
      alt: "setting",
      text: "قفل ها",
      path: "/locks",
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "row", sm: "column" }}
      justifyContent={"center"}
      position={{ xs: "fixed", sm: "relative" }}
      bottom={{ xs: "0" }}
      left={{ xs: "0" }}
      sx={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#1C1C1E" }
      }
      height={{ xs: "12%", sm: "100Vh" }}
      zIndex={{ xs: "100000", sm: "0" }}
      width={{ xs: "100vw", sm: "85px" }}
      borderLeft={{ sm: "2px solid black" }}
      borderTop={{ xs: "2px solid black", sm: "none" }}
    >
      <Stack
        direction={{ xs: "row", sm: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{xs:"3px",sm:"12px"}}
        marginBottom={{ sx: "0", sm: "54px" }}
      >
        {imageArray.map((e) => (
          <div
            className={
              theme === "light"
                ? location.pathname === e.path
                  ? "sidebar-icon-container-light active"
                  : "sidebar-icon-container-light"
                : location.pathname === e.path
                ? "sidebar-icon-container active"
                : "sidebar-icon-container"
            }
            key={e.id}
          >
            <Link to={e.path}>
              <img
                className={
                  theme === "light"
                    ? location.pathname === e.path
                      ? window.innerWidth < 600
                        ? "sidebar-icons-light active small"
                        : "sidebar-icons-light active"
                      : window.innerWidth < 600
                      ? "sidebar-icons-light small"
                      : "sidebar-icons-light"
                    : location.pathname === e.path
                    ? window.innerWidth < 600
                      ? "sidebar-icons active small"
                      : "sidebar-icons active"
                    : window.innerWidth < 600
                    ? "sidebar-icons small"
                    : "sidebar-icons"
                }
                src={theme === "light" ? e.srcWhite : e.srcBlack}
                alt={e.alt}
              />
            </Link>
            <div
              className={
                theme === "light"
                  ? location.pathname === e.path
                    ? "sidebar-text-light active"
                    : "sidebar-text-light"
                  : location.pathname === e.path
                  ? "sidebar-text active"
                  : "sidebar-text"
              }
            >
              {e.text}
            </div>
          </div>
        ))}
        <Stack
          direction={"row-reverse"}
          justifyContent={"space-between"}
          alignItems={"center"}
          position={{ xs: "fixed", sm: "absolute" }}
          top={{ xs: "28px", sm: "12px" }}
          right={{ xs: "190px", sm: "0" }}
        >
          <BedtimeIcon color="primary" sx={{ fontSize: "18px" }} />
          <Switch
            checked={theme === "dark" ? true : false}
            onChange={toggleTheme}
            size="small"
          />
          <LightModeIcon color="warning" sx={{ fontSize: "18px" }} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Sidebar;
