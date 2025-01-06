import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  InputBase,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useThemeStore } from "../utils/userStore";
import ClearIcon from "@mui/icons-material/Clear";
import UserAdd from "../components/UserAdd";
import EditIcon from "@mui/icons-material/Edit";
import { useUserStore } from "../utils/userStore";

function User() {
  const { theme } = useThemeStore();
  const [users, setUsers] = useState([]);
  const [initialRow, setInitialRow] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [addPage, setAddPage] = useState(false);
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const [selectedUser, setSelectedUser] = useState();
  console.log(selectedUser);

  const handleSearchClear = () => {
    setSearchQuery("");
    setUsers(initialRow);
  };

  const handleClose = () => {
    setAddPage(false);
  };

  const handleOpen = () => {
    setAddPage(true);
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);

    if (value === "") {
      setUsers(initialRow);
      return;
    }

    const filteredRows = users.filter(
      (row) =>
        row.name.toLowerCase().includes(value) ||
        row.companyCode.toString().includes(value)
    );

    setUsers(filteredRows);
  };

  const columns = [
    {
      field: "companyCode",
      headerName: "شماره پرسنلی",
      width: 200,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "picture",
      headerName: "تصویر کاربر",
      cellClassName: "grid--cell",
      width: 300,
      headerClassName: "grid--header",
      renderCell: (params) => (
        <Stack width={"100%"} height={"100%"} justifyContent={"center"}>
          <Avatar sx={{ width: "120px", height: "120px" }} src={params.value} />
        </Stack>
      ),
    },
    {
      field: "name",
      headerName: "نام و نام خانوادگی",
      width: 300,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "role",
      headerName: "نقش کاربری",
      flex: 1,
      cellClassName: "grid--cell",
      headerClassName: "grid--header",
      renderCell: (params) => (
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Chip
            sx={{
              width: "62px",
              height: "58px",
              fontSize: "12px",
              fontWeight: "600",
              borderRadius: "50%",
            }}
            color="success"
            label={params.value}
          />
          <Button
            variant="contained"
            onClick={() => setSelectedUser(params.row)}
            disableElevation
            sx={{ borderRadius: "12px", fontWeight: "700" }}
          >
            ویرایش
          </Button>
        </Stack>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(loggedInUser.id);
        const res = await axios.get("http://localhost:7000/users");
        const filteredData = res.data.filter(
          (user) => String(user.id) !== String(loggedInUser.id)
        );
        const userData = filteredData.map((user) => ({
          id: user.id,
          picture: user.picture,
          name: user.name,
          role: user.role,
          companyCode: user.companyCode,
          email: user.email,
          password: user.password,
          username: user.username,
        }));
        setUsers(userData);
        setInitialRow(userData);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [loggedInUser]);
  return (
    <Box height={"100%"} bgcolor={theme === "light" ? "white" : "#1C1C1E"}>
      <Stack
        sx={{ direction: "rtl" }}
        overflow={"hidden"}
        justifyContent={"center"}
        padding={"12px"}
        maxHeight={"100vh"}
        bgcolor={theme === "light" ? "white" : "#1C1C1E"}
      >
        <Stack maxWidth={"100vw"} maxHeight={"100vh"}>
          <Stack
            direction={"row"}
            padding={"12px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"18px"}
            paddingBottom={"24px"}
          >
            <Button
              sx={{ fontWeight: "700" }}
              variant="contained"
              disableElevation
              onClick={handleOpen}
            >
              کاربر جدید +
            </Button>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"12px"}
            >
              <TextField
                variant="standard"
                dir="rtl"
                label="جستجو"
                value={searchQuery}
                onChange={handleSearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleSearchClear}
                        edge="start"
                        style={{
                          visibility: searchQuery === "" ? "hidden" : "visible",
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={
                  theme === "dark"
                    ? {
                        "& .MuiInputBase-input.MuiInput-input": {
                          color: "white",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root": {
                          right: "0",
                          color: "white",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
                          right: "-10px",
                          color: "white",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-shrink":
                          {
                            right: "-10px",
                            color: "white",
                          },
                        "& .MuiInputBase-root.MuiInput-root::after": {
                          borderBottom: "2px solid white",
                        },
                      }
                    : {
                        "& .MuiInputBase-input.MuiInput-input": {
                          color: "black",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root": {
                          right: "0",
                          color: "black",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
                          right: "-10px",
                          color: "black",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-shrink":
                          {
                            right: "-10px",
                            color: "black",
                          },
                      }
                }
              />
            </Box>
          </Stack>
          <DataGrid
            rows={users}
            columns={columns}
            disableSelectionOnClick
            disableColumnFilter={true}
            disableColumnMenu={true}
            disableColumnResize={true}
            disableAutosize={true}
            rowHeight={150}
            sx={
              theme === "dark"
                ? {
                    borderRadius: "12px",
                    "& .MuiDataGrid-columnHeaders": {
                      textAlign: "right",
                      position: "sticky",
                      top: 0,
                      zIndex: 1000,
                    },
                    "& .MuiDataGrid-cell": {
                      textAlign: "right",
                    },
                    "& .grid--header": {
                      backgroundColor: "#1C1C1E",
                      color: "white",
                    },
                    "& .grid--cell": {
                      color: "white",
                    },
                  }
                : {
                    borderRadius: "12px",
                    "& .MuiDataGrid-columnHeaders": {
                      textAlign: "right",
                      position: "sticky",
                      top: 0,
                      zIndex: 1000,
                    },
                    "& .MuiDataGrid-cell": {
                      textAlign: "right",
                    },
                    "& .grid--header": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }
            }
          />
        </Stack>
      </Stack>
      {addPage && <UserAdd onClose={handleClose} />}
      {selectedUser && (
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
          zIndex={10000}
        >
          <Stack
            border={theme === "dark" ? "2px solid white" : "2px solid #2b2b2b"}
            bgcolor={theme === "dark" ? "#1C1C1E" : "white"}
            height={"65%"}
            width={"40%"}
            borderRadius={"24px"}
            position={"relative"}
            direction={"column"}
            px={"28px"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              marginTop={"14px"}
              gap={"24px"}
            >
              <Box position={"relative"}>
                <Avatar
                  src={selectedUser.picture}
                  sx={{ width: "120px", height: "120px" }}
                />
                <input
                  type="file"
                  id="icon-button-file"
                  style={{ display: "none" }}
                  accept="image/*"
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    component="span"
                    size="small"
                    color="primary"
                    type="file"
                    sx={{
                      position: "absolute",
                      top: "90px",
                      right: "10px",
                      bgcolor: "#104a84",
                      border: "2px solid #d1d1d1a8",
                      "&:hover": {
                        bgcolor: "#1976D2",
                      },
                    }}
                  >
                    <EditIcon sx={{ color: "white" }} />
                  </IconButton>
                </label>
              </Box>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                gap={"12px"}
              >
                <Typography
                  color={theme === "dark" ? "white" : "black"}
                  fontSize={"34px"}
                  fontWeight={"600"}
                >
                  {selectedUser.name}
                </Typography>
              </Stack>
            </Stack>
            <div
              style={{
                height: "1px",
                backgroundColor: "#b5b5b5",
                width: "100%",
                marginTop: "24px",
              }}
            ></div>
            <Stack marginTop={"34px"} gap={"14px"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <InputBase
                  sx={
                    theme === "dark" ? { color: "white" } : { color: "black" }
                  }
                  defaultValue={selectedUser.username}
                  dir="rtl"
                />
                <Typography color={theme === "dark" ? "white" : "black"}>
                  نام کاربری
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <InputBase
                  sx={
                    theme === "dark" ? { color: "white" } : { color: "black" }
                  }
                  defaultValue={selectedUser.email}
                  dir="rtl"
                />
                <Typography color={theme === "dark" ? "white" : "black"}>
                  ایمیل
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <InputBase
                  sx={
                    theme === "dark" ? { color: "white" } : { color: "black" }
                  }
                  defaultValue={selectedUser.companyCode}
                  dir="rtl"
                />
                <Typography color={theme === "dark" ? "white" : "black"}>
                  کد پرسنلی
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <InputBase
                value={selectedUser.password}
                  type="password"
                  sx={
                    theme === "dark" ? { color: "white" } : { color: "black" }
                  }
                  dir="rtl"
                />
                <Typography color={theme === "dark" ? "white" : "black"}>
                  کلمه عبور
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <InputBase
                  sx={
                    theme === "dark" ? { color: "white" } : { color: "black" }
                  }
                  placeholder="8 رقم و ترکیبی از اعداد و حروف"
                  dir="rtl"
                />
                <Typography color={theme === "dark" ? "white" : "black"}>
                  کلمه عبور جدید
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              marginTop={"34px"}
            >
              <Button
                variant="contained"
                onClick={() => setSelectedUser(null)}
                disableElevation
                color="error"
                sx={{ fontWeight: "700", width: "200px", height: "54px" }}
              >
                انصراف
              </Button>
              <Button
                color="success"
                variant="contained"
                disableElevation
                sx={{ fontWeight: "700", width: "200px", height: "54px" }}
                onClick={() => alert("اطلاعان ثبت شد")}
              >
                ثبت
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default User;
