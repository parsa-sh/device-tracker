import { Box, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router";

function Sidebar() {
  const imageArray = [
    {
      id: "1",
      src: "src/assets/Icons/home.png",
      alt: "home",
      text: "خانه",
      path: "/home",
    },
    { id: "2", src: "src/assets/Icons/user.png", alt: "user", text: "کاربری",path:"/user" },
    {
      id: "3",
      src: "src/assets/Icons/truck.png",
      alt: "truck",
      text: "ماشین ها",
      path:"/trucks"
    },
    {
      id: "4",
      src: "src/assets/Icons/wheel.png",
      alt: "driver",
      text: "راننده ها",
      path:"/drivers"

    },
    {
      id: "5",
      src: "src/assets/Icons/device.png",
      alt: "devices",
      text: "دستگاه ها",
      path:"/devices"
    },
    {
      id: "6",
      src: "src/assets/Icons/setting.png",
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
      sx={{ backgroundColor: "#1C1C1E"}}
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
          <div className="sidebar-icon-container" key={e.id}>
            <Link to={e.path}>
              <img className="sidebar-icons" src={e.src} alt={e.alt} />
            </Link>
            <div className="sidebar-text">{e.text}</div>
          </div>
        ))}
      </Stack>
    </Box>
  );
}

export default Sidebar;
