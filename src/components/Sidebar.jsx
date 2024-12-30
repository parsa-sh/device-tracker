import { Box, Stack } from "@mui/material";
import { Link } from "react-router";
import { useThemeStore } from "../utils/userStore";

function Sidebar() {
  const { theme } = useThemeStore();
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
      srcBlack: "src/assets/Icons/setting.png",
      srcWhite: "src/assets/Icons/setting-black.png",
      alt: "setting",
      text: "تنظیمات",
      path: "/setting",
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#1C1C1E" }
      }
      maxHeight={"90vh"}
      width={"110px"}
      borderLeft={"2px solid black"}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"16px"}
      >
        {imageArray.map((e) => (
          <div
            className={
              theme === "light"
                ? "sidebar-icon-container-light"
                : "sidebar-icon-container"
            }
            key={e.id}
          >
            <Link to={e.path}>
              <img
                className={
                  theme === "light" ? "sidebar-icons-light" : "sidebar-icons"
                }
                src={theme === "light" ? e.srcWhite : e.srcBlack}
                alt={e.alt}
              />
            </Link>
            <div
              className={
                theme === "light" ? "sidebar-text-light" : "sidebar-text"
              }
            >
              {e.text}
            </div>
          </div>
        ))}
      </Stack>
    </Box>
  );
}

export default Sidebar;
