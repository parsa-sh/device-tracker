import { Stack, Box, Typography } from "@mui/material";
import { devices } from "./../utils/deviceData";

function Cards() {
  return (
    <Box
      bgcolor={"none"}
      marginBottom={"12px"}
      marginTop={"12px"}
      height={"80vh"}
      sx={{
        position: "absolute",
        zIndex: "1000",
        paddingBottom:"120px",
        overflowY: "scroll",
        "& ::-webkit-scrollbar": "hidden",
        scrollbarWidth: "none",
      }}
    >
      <Stack
        position={"relative"}
        top={"30px"}
        left={"35px"}
        direction={"column"}
        gap={"12px"}
        height={"100vh"}
        justifyContent={"space-between"}
        alignContent={"center"}
        sx={{
          "& .MuiStack-root": {
            cursor: "pointer",
            transition: "all 0.1s",
            boxShadow:"2px 2px 5px 2px #8a8a8a"
          },
          "& .MuiStack-root:hover": {
            transform: "scale(1.06 , 1.06)",
            
          },
          "& .MuiStack-root:active": {
            backgroundColor:"#303a4b"
          },
        }}
      >
        {devices.map((e) => (
          <Stack
            key={e.id}
            width={"80%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"12px"}
            bgcolor={"#44546D"}
            borderRadius={"12px"}
            padding={"7px"}
          >
            <img src={e.img} alt="" style={{ width: "70px" }} />
            <Box direction={"column"}>
              <Typography color="white" sx={{ userSelect: "none" }}>
                {e.name}
              </Typography>
              <Typography color="white" sx={{ userSelect: "none" }}>
                {e.text}
              </Typography>
            </Box>
          </Stack>
        ))}

        {/* <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <img
            src="src/assets/images/device.png"
            alt="device.png"
            style={{ width: "70px" }}
          />
          <Stack>
            <Typography></Typography>
            <Typography></Typography>
          </Stack>
        </Stack> */}
      </Stack>
    </Box>
  );
}

export default Cards;
