import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { users } from "./../utils/users";
import { useUserStore } from "../utils/userStore";

// eslint-disable-next-line react/prop-types
function Login({ onLogin }) {
  const setLoggedInUser = useUserStore((state) => state.setLoggedInUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoggedInUser({ name: user.name, username ,picture: user.picture });
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password.");
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
                type="text"
                value={username}
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
                value={password}
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
              onClick={handleLogin}
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
            {error && <p style={{ color: "red" }}>{error}</p>}
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
