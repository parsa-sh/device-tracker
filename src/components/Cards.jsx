import { Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useCardData, useThemeStore } from "../utils/userStore";

function Cards() {
  const { cards, setCards, setSelectedCard, setSelectedMarker } = useCardData();
  const { theme } = useThemeStore();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setSelectedMarker([card]);
  };

  const apiGet = async () => {
    const headers = {
      "accept": "application/json",
      "Content-Type": "application/json",
      "X-CSRFTOKEN":
        "ZWX49Bod8s0CgAIdvvE2qwDeJCo7fC1lF9MfOxL5vQr02Er8u6wFRJLYsazVEnFk",
    };
    try {
      const res = await axios.get(
        "http://192.168.88.17:8000/api/devices/",
        {headers}
      );
      const processedCards = res?.data.map((item) => {
        if (item.last_location) {
          const match = item.last_location.match(
            /POINT\s\(([-\d.]+)\s([-\d.]+)\)/
          );
          if (match) {
            const long = parseFloat(match[1]);
            const lat = parseFloat(match[2]);
            return { ...item, long, lat };
          }
        }
        return item;
      });
      setCards(processedCards);
      console.log(processedCards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCards]);

  return (
    <Box
      bgcolor={"none"}
      marginBottom={"12px"}
      marginTop={"12px"}
      maxHeight={"80%"}
      width={"20%"}
      sx={{
        position: "absolute",
        zIndex: "1000",
        paddingBottom: "120px",
        overflowY: "scroll",
        "& ::-webkit-scrollbar": "hidden",
        scrollbarWidth: "none",
      }}
    >
      <Stack
        position={"relative"}
        width={"70%"}
        top={"30px"}
        left={"25px"}
        direction={"column"}
        gap={"12px"}
        height={"100%"}
        justifyContent={"space-between"}
        alignContent={"center"}
        sx={
          theme === "light"
            ? {
                "& .MuiStack-root": {
                  cursor: "pointer",
                  transition: "all 0.1s",
                  boxShadow: "2px 2px 5px 2px #8a8a8a",
                },
                "& .MuiStack-root:hover": {
                  transform: "scale(1.06 , 1.06)",
                },
                "& .MuiStack-root:active": {
                  backgroundColor: "#f2f2f2",
                },
              }
            : {
                "& .MuiStack-root": {
                  cursor: "pointer",
                  transition: "all 0.1s",
                  boxShadow: "2px 2px 5px 2px #8a8a8a",
                },
                "& .MuiStack-root:hover": {
                  transform: "scale(1.06 , 1.06)",
                },
                "& .MuiStack-root:active": {
                  backgroundColor: "black",
                },
              }
        }
      >
        {cards?.map((e) => (
          <Stack
            key={e.id}
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"12px"}
            bgcolor={theme === "light" ? "white" : "#1C1C1E"}
            borderRadius={"12px"}
            padding={"12px"}
            onClick={() => handleCardClick(e)}
          >
            <img src="src/assets/images/device.png" alt="" style={{ width: "70px" }} />
            <Box display={"flex"} direction={"row"} gap={"18px"}>
              <Typography
                color={theme === "light" ? "black" : "white"}
                sx={{ userSelect: "none" }}
              >
                {e.id}
              </Typography>
              <Typography
                color={theme === "light" ? "black" : "white"}
                sx={{ userSelect: "none" }}
              >
                {e.company}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default Cards;
