import { Box, Stack } from "@mui/material";

function Sidebar() {
  const imageArray = [
    { id: "1", src: "src/assets/Icons/home.png", alt: "home", text: "خانه" },
    { id: "2", src: "src/assets/Icons/user.png", alt: "user", text: "کاربری" },
    {
      id: "3",
      src: "src/assets/Icons/truck.png",
      alt: "truck",
      text: "ماشین ها",
    },
    {
      id: "4",
      src: "src/assets/Icons/wheel.png",
      alt: "driver",
      text: "راننده ها",
    },
    {
      id: "5",
      src: "src/assets/Icons/device.png",
      alt: "devices",
      text: "دستگاه ها",
    },
    {
      id: "6",
      src: "src/assets/Icons/setting.png",
      alt: "setting",
      text: "تنظیمات",
    },
  ];
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{ backgroundColor: "#1C1C1E", borderTop: "2px solid" }}
        // pt={"24px"}
      maxHeight={"90vh"}
      width={"107px"}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"16px"}
      >
        {imageArray.map((e) => (
          <div className="sidebar-icon-container" key={e.id}>
            <img className="sidebar-icons" src={e.src} alt={e.alt} />
            <div className="sidebar-text">{e.text}</div>
          </div>
        ))}
      </Stack>
    </Box>
  );
}

export default Sidebar;
