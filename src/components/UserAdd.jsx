import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { useThemeStore } from "../utils/userStore";
import EditIcon from "@mui/icons-material/Edit";

// eslint-disable-next-line react/prop-types, no-unused-vars
function UserAdd({ onClose }) {
  const { theme } = useThemeStore();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      position={"fixed"}
      top={"50%"}
      left={"50%"}
      bgcolor={"#292929e0"}
      sx={{ transform: "translate(-50% , -50%)" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={10000}
    >
      <Stack
        border={theme === "dark" ? "2px solid white" : "2px solid #2b2b2b"}
        bgcolor={theme === "dark" ? "#1C1C1E" : "white"}
        height={"65%"}
        width={"40%"}
        borderRadius={"24px"}
        position={"relative"}
        direction={"column"}
        px={"28px"}
        justifyContent={"center"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={"14px"}
          gap={"24px"}
        >
          <Box position={"relative"}>
            <Avatar sx={{ width: "120px", height: "120px" }} />
            <input
              type="file"
              id="icon-button-file"
              style={{ display: "none" }}
              accept="image/*"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                component="span"
                size="small"
                color="primary"
                type="file"
                sx={{
                  position: "absolute",
                  top: "90px",
                  right: "10px",
                  bgcolor: "#104a84",
                  border: "2px solid #d1d1d1a8",
                  "&:hover": {
                    bgcolor: "#1976D2",
                  },
                }}
              >
                <EditIcon sx={{ color: "white" }} />
              </IconButton>
            </label>
          </Box>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            gap={"12px"}
          >
            <Typography
              color={theme === "dark" ? "white" : "black"}
              fontSize={"34px"}
              fontWeight={"600"}
            ></Typography>
          </Stack>
        </Stack>
        <div
          style={{
            height: "1px",
            backgroundColor: "#b5b5b5",
            width: "100%",
            marginTop: "24px",
          }}
        ></div>
        <Stack marginTop={"34px"} gap={"14px"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <InputBase
              placeholder="نام کاربری جدید را وارد کنید"
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              dir="rtl"
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
              نام کاربری
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <InputBase
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              dir="rtl"
              placeholder="ایمیل جدید را وارد کنید"
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
              ایمیل
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <InputBase
            placeholder="کد پرسنلی جدید را وارد کنید"
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              dir="rtl"
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
              کد پرسنلی
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <InputBase
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              dir="rtl"
              placeholder="ترکیبی از اعداد و حروف"
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
             کلمه عبور جدید
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <InputBase
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              dir="rtl"
              placeholder="ترکیبی از اعداد و حروف"
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
             تکرار کلمه عبور جدید
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          marginTop={"34px"}
        >
          <Button
            variant="contained"
            disableElevation
            color="error"
            onClick={onClose}
            sx={{ fontWeight: "700", width: "200px", height: "54px" }}
          >
            انصراف
          </Button>
          <Button
            color="success"
            variant="contained"
            disableElevation
            sx={{ fontWeight: "700", width: "200px", height: "54px" }}
            onClick={() => alert("اطلاعان ثبت شد")}
          >
            ثبت
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default UserAdd;
