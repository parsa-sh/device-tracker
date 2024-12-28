import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = () => {
    if (username === "test" && password === "test") {
      onLogin();
      navigate("/");
    } else {
      alert("Invalid username and password");
    }
  };
  return (
    <Box
      sx={{ backgroundColor: "black" }}
      width={"100vw"}
      height={"100vh"}
      padding={"84px"}
    >
      <Stack
        direction={"row-reverse"}
        sx={{ backgroundColor: "white", borderRadius: "24px" }}
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        padding={"32px"}
        gap={"12px"}
      >
        <Stack
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"74px"}
        >
          <Typography width={"100%"} textAlign={"center"} fontSize={"84px"}>
            خوش آمدید
          </Typography>
          <Stack
            gap={"54px"}
            width={"50%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack width={"100%"} gap={"24px"}>
              <TextField
                label="نام کاربری"
                required
                dir="rtl"
                fullWidth
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "12px",
                    paddingX: "12px",
                  },
                  "& .MuiInputLabel-root": {
                    position: "relative",
                    top: "20px",
                    right: "30px",
                    transformOrigin: "right",
                  },
                  "& .MuiInputLabel-root.Mui-focused , .MuiInputLabel-shrink": {
                    right: "29px",
                    top: "16px",
                  },
                }}
              />
              <TextField
                label="کلمه عبور"
                required
                type="password"
                dir="rtl"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "12px",
                    paddingX: "12px",
                  },
                  "& .MuiInputLabel-root": {
                    position: "relative",
                    top: "20px",
                    right: "30px",
                    padding: "0",
                    margin: "0",
                    transformOrigin: "right",
                  },
                  "& .MuiInputLabel-root.Mui-focused , .MuiInputLabel-shrink": {
                    right: "29px",
                    top: "16px",
                  },
                }}
              />
            </Stack>
            <Button
              variant="contained"
              onClick={submit}
              sx={{
                borderRadius: "12px",
                width: "100%",
                fontWeight: "500",
              }}
            >
              <Typography
                fontSize={"32px"}
                paddingBottom={"16px"}
                fontWeight={"700"}
              >
                ورود
              </Typography>
            </Button>
          </Stack>
        </Stack>
        <Stack
          sx={{
            borderRadius: "24px",
            overflow: "hidden",
          }}
          width={"100%"}
          height={"100%"}
          paddingY={"54px"}
          paddingX={"54px"}
        >
          <img
            src="src/assets/images/logo.jpg"
            alt="login-image"
            style={{
              height: "100%",
              maxWidth: "100%",
              borderRadius: "24px",
              padding: "50px",
              backgroundColor: "#44546c",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Login;
