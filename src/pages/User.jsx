import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useUserStore } from "../utils/userStore";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
function User() {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={"12px"}
      justifyContent={"flex-end"}
      width={"100%"}
    >
      <Stack
        direction={"column"}
        width={"90vw"}
        textAlign={"right"}
        mt={"38px"}
        pb={"16px"}
        gap={"12px"}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
          حساب کاربری
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          اطلاعات و فعالیت های بلادرنگ شما
        </Typography>
        <div
          style={{
            height: "1px",
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
          }}
        >
          <div
            style={{ backgroundColor: "#c7c7c7", width: "97%", height: "100%" }}
          ></div>
        </div>
      </Stack>
      <Stack
        direction={"row-reverse"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"97%"}
        paddingx={"38px"}
      >
        <Stack
          direction={"row-reverse"}
          gap={"12px"}
          justifyContent={"flex-end"}
        >
          <img
            src={loggedInUser.picture}
            style={{ width: "200px", borderRadius: "20%" }}
            alt="profile"
          />
          <Stack textAlign={"right"} justifyContent={"center"} gap={"7px"}>
            <Typography sx={{ fontWeight: "700" }}>عکس کاربری</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              عکس به صورت jpeg ,png و کمتراز 20 مگابایت باشد
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row-reverse"}
          gap={"24px"}
          height={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            disableElevation
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              borderRadius: "12px",
              paddingY: "14px",
            }}
          >
            آپلود عکس جدید
          </Button>
          <Button
            variant="contained"
            color="error"
            disableElevation
            sx={{
              fontSize: "12px",
              fontWeight: "700",
              borderRadius: "12px",
              paddingY: "14px",
            }}
          >
            حذف عکس فعلی
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"38px"}
        width={"97%"}
        mt={"24px"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <TextField
            label="کد پرسنلی"
            value={loggedInUser.companyCode}
            sx={{
              "& .MuiFormLabel-root.MuiInputLabel-root": {
                right: "-38px",
                top: "-3px",
                direction: "rtl",
              },
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                direction: "rtl",
              },
            }}
          />
          <TextField
            label="نام خانوادگی"
            value={loggedInUser.name}
            sx={{
              "& .MuiFormLabel-root.MuiInputLabel-root": {
                right: "-38px",
                top: "-3px",
                direction: "rtl",
              },
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                direction: "rtl",
              },
            }}
          />
          <TextField
            label="نام کاربری"
            value={`${loggedInUser.username} @`}
            sx={{
              "& .MuiFormLabel-root.MuiInputLabel-root": {
                right: "-36px",
                top: "-3px",
                direction: "rtl",
              },
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                direction: "rtl",
              },
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <TextField
            label="نقش کاربری"
            value={loggedInUser.role}
            sx={{
              "& .MuiFormLabel-root.MuiInputLabel-root": {
                right: "-38px",
                top: "-3px",
                direction: "rtl",
              },
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                direction: "rtl",
              },
            }}
          />
          <FormControl
            variant="outlined"
            sx={{
              "& .MuiFormLabel-root.MuiInputLabel-root": {
                right: "-50px",
                top: "-3px",
                direction: "rtl",
              },
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                direction: "rtl",
              },
            }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              کلمه عبور
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={loggedInUser.password}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="password"
            />
          </FormControl>
          <TextField
            label="ایمیل"
            value={loggedInUser.email}
            sx={{
              "& .MuiFormLabel-root.MuiInputLabel-root": {
                right: "-38px",
                top: "-3px",
                direction: "rtl",
              },
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                direction: "rtl",
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default User;
