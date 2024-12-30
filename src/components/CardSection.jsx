import { IconButton, Stack, Typography } from "@mui/material";
import { useCardData } from "../utils/userStore";
import CancelIcon from "@mui/icons-material/Cancel";

function CardSection() {
  const { selectedCard, setSelectedCard } = useCardData();

  const handleClear = () => {
    setSelectedCard(null);
  };

  return (
    <>
      {selectedCard ? (
        <Stack
          direction={"row-reverse"}
          position={"fixed"}
          bottom={"12px"}
          left={"50%"}
          zIndex={"10000"}
          height={"100px"}
          width={"700px"}
          bgcolor={"#1C1C1E"}
          borderRadius={"12px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={"12px"}
          gap={"48px"}
          sx={{ transform: "translate(-50%)" }}
        >
          <img
            src={selectedCard.img}
            alt="device-image"
            style={{ width: "80px", height: "80px" }}
          />
          <Stack
            direction={"column"}
            alignItems={"flex-end"}
            justifyContent={"space-between"}
            color={"white"}
          >
            <Typography>{selectedCard.name}</Typography>
            <Typography>{selectedCard.text}</Typography>
          </Stack>
            <IconButton
              color="info"
              sx={{ marginBottom: "50px"}}
              onClick={handleClear}
            >
              <CancelIcon sx={{ color: "white"}} />
            </IconButton>
        </Stack>
      ) : (
        <div
          style={{
            visibility: "hidden",
          }}
        ></div>
      )}
    </>
  );
}

export default CardSection;
