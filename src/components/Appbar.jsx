import { Box, InputBase, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Appbar() {
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
            src="src/assets/images/user.jpg"
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
            پارسا شاهسون
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          paddingLeft={"70px"}
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
                fontSize:"18px",
                fontWeight:"600",
                "& .MuiInputBase-input::placeholder": {
                  color: "white",
                  fontWeight: "700",
                },
              }}
            />
            <SearchIcon sx={{ color: "white", fontSize: "32px" }} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Appbar;
