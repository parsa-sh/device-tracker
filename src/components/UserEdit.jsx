import {
  Avatar,
  Box,
  Button,
  IconButton,
  Input,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { useUserStore } from "../utils/userStore";
import { useThemeStore } from "../utils/userStore";
import EditIcon from "@mui/icons-material/Edit";

// eslint-disable-next-line react/prop-types
function UserEdit({ onClose }) {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
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
            <Avatar
              src={loggedInUser.picture}
              sx={{ width: "120px", height: "120px" }}
            />
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
            >
              {loggedInUser.name}
            </Typography>
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
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              placeholder={loggedInUser.username}
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
              placeholder={loggedInUser.email}
              dir="rtl"
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
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              placeholder={loggedInUser.companyCode}
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
              placeholder={loggedInUser.password}
              dir="rtl"
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
              کلمه عبور
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <InputBase
              sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              placeholder="کلمه عبور جدید را وارد کنید"
              dir="rtl"
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
              کلمه عبور جدید
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
            sx={{ fontWeight: "700", width: "200px", height: "54px" }}
            onClick={onClose}
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

export default UserEdit;
