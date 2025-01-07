import { IconButton, Stack, Typography } from "@mui/material";
import { useCardData , useThemeStore} from "../utils/userStore";
import CancelIcon from "@mui/icons-material/Cancel";

function CardSection() {
  const { selectedCard, setSelectedCard } = useCardData();
  const {theme} = useThemeStore();

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
          bgcolor={theme==="light"?"white":"#1C1C1E"}
          borderRadius={"12px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingX={"12px"}
          gap={"48px"}
          sx={{ transform: "translate(-50%)" }}
        >
          <img
            src="src/assets/images/device.png"
            alt="device-image"
            style={{ width: "80px", height: "80px" }}
          />
          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            color={theme==="light"?"black":"white"}
          >
            <Typography>Company : {selectedCard.company}</Typography>
            <Typography>IMEI : {selectedCard.imei}</Typography>
            <Typography>Type : {selectedCard.type}</Typography>
            <Typography>IsActive : {selectedCard.is_active===true ?"true":"false"}</Typography>
          </Stack>
            <IconButton
              color="info"
              sx={{ marginBottom: "50px"}}
              onClick={handleClear}
            >
              <CancelIcon sx={theme==="light"?{color:"black"}:{ color: "white"}} />
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
