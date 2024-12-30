import {
  Box,
  FormControl,
  FormControlLabel,
  Switch,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import { useThemeStore } from "../utils/userStore";

function Setting() {
  const { theme, toggleTheme } = useThemeStore();
  const [lang, setLang] = useState("farsi");

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };
  return (
    <Box
      bgcolor={theme==="light"?"white":"#1C1C1E"}
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        border={"2px solid grey"}
        width={"60vw"}
        height={"60vh"}
        borderRadius={"12px"}
        padding={"24px"}
        bgcolor={"white"}
        gap={"24px"}
      >
        <FormControl variant="standard">
          <InputLabel>زبان</InputLabel>
          <Select value={lang} onChange={handleLangChange}>
            <MenuItem value={"farsi"}>فارسی</MenuItem>
            <MenuItem value={"english"}>انگلیسی</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction={"row-reverse"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <BedtimeIcon color="primary" />
          <FormControlLabel
            control={
              <Switch
                checked={theme === "dark" ? true : false}
                onChange={toggleTheme}
              />
            }
            label="حالت شب"
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Setting;
