import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useUserStore } from "../utils/userStore";
import { useThemeStore } from "../utils/userStore";

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
          <Avatar
            src={loggedInUser.picture}
            sx={{ width: "120px", height: "120px" }}
          />
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
            <TextField
              size="small"
              defaultValue={loggedInUser.name}
              sx={theme==="dark"?{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "white",
                },
              }:{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "black",
                },
              }}
            />
            <Typography color={theme === "dark" ? "white" : "black"}>
              نام و نام خانوادگی
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TextField
              size="small"
              defaultValue={loggedInUser.email}
              sx={theme==="dark"?{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "white",
                },
              }:{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "black",
                },
              }}
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
            <TextField
              size="small"
              defaultValue={loggedInUser.companyCode}
              sx={theme==="dark"?{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "white",
                },
              }:{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "black",
                },
              }}
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
            <TextField
              size="small"
              defaultValue={loggedInUser.password}
              type="password"
              sx={theme==="dark"?{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "white",
                },
              }:{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "black",
                },
              }}
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
            <TextField
              size="small"
              type="password"
              sx={theme==="dark"?{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "white",
                },
              }:{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  color: "black",
                },
              }}
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
