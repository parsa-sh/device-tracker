import { Box, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { useUserStore } from "../utils/userStore";
import { useState } from "react";

function Appbar() {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const navigate = useNavigate();
  const [open , setOpen] = useState(false)

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <Box sx={{ backgroundColor: "#1C1C1E" }} width={"100%"} height={"100px"}>
      <Stack direction={"row-reverse"} height={"100%"}>
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"row-reverse"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          paddingRight={"24px"}
          gap={"12px"}
        >
          <img
            src={loggedInUser.picture
            }
            alt="user-pic"
            style={{
              width: "65px",
              height: "60px",
              borderRadius: "12px",
              border: "2px solid #ffffff78",
            }}
          />
          <Typography
            sx={{ color: "white", fontWeight: "900", fontSize: "18px" }}
          >
            {loggedInUser.name}
          </Typography>
          
        </Stack>
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"12px"}
          >
            <InputBase
              placeholder="جستجو"
              dir="rtl"
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
                "& .MuiInputBase-input::placeholder": {
                  color: "white",
                  fontWeight: "700",
                },
              }}
            />
            <SearchIcon sx={{ color: "white", fontSize: "32px" }} />
          </Box>
        </Stack>
        <Stack
          width={"150px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
          paddingTop={"auto"}
          paddingLeft={"12px"}
        >
          <img
            src="src/assets/images/logo.jpg"
            alt="logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              border: "5px solid #44546D",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Appbar;
