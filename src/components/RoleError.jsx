import { Box, Typography } from "@mui/material";
import { useThemeStore } from "../utils/userStore";

function RoleError() {
  const { theme } = useThemeStore();
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#1C1C1E" }
      }
    >
      <Typography
        fontSize={{xs:"44px",sm:"68px"}}
        color={theme === "light" ? "black" : "white"}
      >
        Access Denied !
      </Typography>
      <Typography color={theme === "light" ? "black" : "white"}>
        Only admin user can access
      </Typography>
    </Box>
  );
}

export default RoleError;
