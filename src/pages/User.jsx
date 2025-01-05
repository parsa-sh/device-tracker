import { Avatar, Box, Button, Chip, Stack, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import UserEdit from "../components/UserEdit";
import SearchIcon from "@mui/icons-material/Search";
import { useThemeStore } from "../utils/userStore";

function User() {
  const { theme } = useThemeStore();
  const [users, setUsers] = useState([]);
  const [initialRow , setInitialRow] = useState([])
  const [editPage, setEditPage] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);

    if(value === ''){
      setUsers(initialRow)
      return;
    }

    const filteredRows = users.filter(
      (row) =>
        row.name.toLowerCase().includes(value) ||
        row.companyCode.toString().includes(value)
    );

    setUsers(filteredRows);
  };

  const handleEdit = () => {
    setEditPage(true);
  };
  const handleEditClose = () => {
    setEditPage(false);
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
            disableElevation
            sx={{ borderRadius: "12px", fontWeight: "700" }}
            onClick={handleEdit}
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
        const res = await axios.get("http://localhost:7000/users");
        const userData = res.data.map((user) => ({
          id: user.id,
          picture: user.picture,
          name: user.name,
          role: user.role,
          companyCode: user.companyCode,
          email: user.email,
          password: user.password,
        }));
        setUsers(userData);
        setInitialRow(userData);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);
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
            >
              کاربر جدید +
            </Button>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"12px"}
            >
              <SearchIcon
                sx={theme === "dark" ? { color: "white" } : { color: "black" }}
              />
              <TextField
                variant="standard"
                dir="rtl"
                label="جستجو"
                value={searchQuery}
                onChange={handleSearch}
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
      {editPage && <UserEdit onClose={handleEditClose} />}
    </Box>
  );
}

export default User;
