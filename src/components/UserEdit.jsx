import { Box, IconButton, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function UserEdit({onClose}) {
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
        height={"60%"}
        width={"40%"}
        borderRadius={"24px"}
        position={"relative"}
      >
        <IconButton sx={{ position: "absolute", top: "7px", right: "7px" }} onClickCapture={onClose}>
          <CancelIcon />
        </IconButton>
        <Typography>test</Typography>
      </Stack>
    </Box>
  );
}

export default UserEdit;
