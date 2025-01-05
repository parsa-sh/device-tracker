import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useUserStore } from "../utils/userStore";

function UserEdit({ onClose }) {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
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
        bgcolor={"white"}
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
            <Typography fontSize={"34px"} fontWeight={"600"}>
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
            <TextField size="small" value={loggedInUser.name} />
            <Typography>نام و نام خانوادگی</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TextField size="small" value={loggedInUser.email} />
            <Typography>ایمیل</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TextField size="small" value={loggedInUser.companyCode} />
            <Typography>کد پرسنلی</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TextField
              size="small"
              value={loggedInUser.password}
              type="password"
            />
            <Typography>کلمه عبور</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TextField size="small" />
            <Typography>کلمه عبور جدید</Typography>
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
            color="error"
            sx={{ fontWeight: "700", width: "200px", height: "54px" }}
            onClick={onClose}
          >
            انصراف
          </Button>
          <Button
            color="success"
            variant="contained"
            sx={{ fontWeight: "700", width: "200px", height: "54px" }}
            onClick={()=>alert("اطلاعان ثبت شد")}
          >
            ثبت
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default UserEdit;
