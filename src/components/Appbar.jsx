import {
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { useUserStore } from "../utils/userStore";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LogoutIcon from "@mui/icons-material/Logout";
import { useThemeStore } from "../utils/userStore";
import UserEdit from "./UserEdit";

function Appbar() {
  const { theme } = useThemeStore();
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const logoutUser = useUserStore((state) => state.logoutUser);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [editPage, setEditPage] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  const handleEdit = () => {
    setEditPage(true);
  };
  const handleEditClose = () => {
    setEditPage(false);
  };

  return (
    <Box
      sx={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#1C1C1E" }
      }
      width={"100%"}
      height={"80px"}
      borderBottom={"2px solid black"}
    >
      <Stack direction={"row-reverse"} height={"100%"}>
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"row-reverse"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          paddingRight={"24px"}
          gap={"5px"}
        >
          <img
            src={`http://192.168.88.17:8000${loggedInUser.pic}`}
            alt="user-pic"
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "12px",
            }}
          />
          <Typography
            sx={
              theme === "light"
                ? {
                    color: "black",
                    fontWeight: "900",
                    fontSize: { xs: "10px", sm: "18px" },
                  }
                : {
                    color: "white",
                    fontWeight: "900",
                    fontSize: { xs: "10px", sm: "18px" },
                  }
            }
          >
            {loggedInUser.name}
          </Typography>
          <Stack
            direction={"column"}
            position={"relative"}
            sx={{ transition: "ease-in-out 1s" }}
          >
            <IconButton color="info" onClick={handleOpen}>
              {open ? (
                <ArrowDropUpIcon
                  sx={
                    theme === "light" ? { color: "black" } : { color: "white" }
                  }
                />
              ) : (
                <ArrowDropDownIcon
                  sx={
                    theme === "light" ? { color: "black" } : { color: "white" }
                  }
                />
              )}
            </IconButton>
            {open ? (
              <Stack
                width={"130px"}
                direction={"column"}
                position={"absolute"}
                zIndex={"1000"}
                top={"30px"}
                right={{xs:"",sm:"0px"}}
                gap={"12px"}
                border={
                  theme === "light" ? "0.5px solid grey" : "0.5px solid white"
                }
                padding={"7px"}
                borderRadius={"12px"}
                bgcolor={theme === "light" ? "white" : "#1C1C1E"}
                sx={{ transition: "ease-in-out 1s" }}
              >
                <Button variant="contained" onClick={handleEdit}>
                  تنظیمات کاربری
                </Button>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  startIcon={<LogoutIcon />}
                >
                  خروج
                </Button>
              </Stack>
            ) : (
              ""
            )}
          </Stack>
        </Stack>
        {/* <Stack
          width={"100%"}
          height={"100%"}
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        > */}
          {/* <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"12px"}
          >
            <InputBase
              placeholder="جستجو"
              dir="rtl"
              sx={
                theme === "light"
                  ? {
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "600",
                      "& .MuiInputBase-input::placeholder": {
                        color: "black",
                        fontWeight: "700",
                      },
                    }
                  : {
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "600",
                      "& .MuiInputBase-input::placeholder": {
                        color: "white",
                        fontWeight: "700",
                      },
                    }
              }
            />
            <SearchIcon
              sx={
                theme === "light"
                  ? { color: "black", fontSize: "32px" }
                  : { color: "white", fontSize: "32px" }
              }
            />
          </Box> */}
        {/* </Stack> */}
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
              backgroundColor: "#44546D",
            }}
          />
        </Stack>
      </Stack>
      {editPage && <UserEdit onClose={handleEditClose} />}
    </Box>
  );
}

export default Appbar;
