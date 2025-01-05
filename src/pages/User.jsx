import {
  Avatar,
  Box,
  Button,
  Chip,
  InputBase,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import UserEdit from "../components/UserEdit";
import SearchIcon from "@mui/icons-material/Search";

function User() {
  const [users, setUsers] = useState([]);
  const [editPage, setEditPage] = useState(false);

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
    },
    {
      field: "picture",
      HeaderName: "تصویر کاربر",
      width: 300,
      renderCell: (params) => (
        <Stack width={"100%"} height={"100%"} justifyContent={"center"}>
          <Avatar sx={{ width: "120px", height: "120px" }} src={params.value} />
        </Stack>
      ),
    },
    { field: "name", headerName: "نام و نام خانوادگی", width: 300 },
    {
      field: "role",
      headerName: "نقش کاربری",
      flex: 1,
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
            color="secondary"
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
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Stack
        sx={{ direction: "rtl" }}
        overflow={"hidden"}
        justifyContent={"center"}
        padding={"12px"}
        maxHeight={"100vh"}
      >
        <Stack maxWidth={"100vw"} maxHeight={"100vh"}>
          <Stack
            direction={"row"}
            borderBottom={"1px solid #d6d6d6"}
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
              color="secondary"
            >
              کاربر جدید +
            </Button>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"12px"}
            >
              <SearchIcon />
              <TextField
                variant="standard"
                dir="rtl"
                color="secondary"
                label="جستجو"
                sx={{
                  "& .MuiFormLabel-root.MuiInputLabel-root": {
                    right: "0",
                  },
                  "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
                    right: "-10px",
                  },
                  "& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-shrink": {
                    right: "-10px",
                  },
                }}
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
            sx={{
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
            }}
          />
        </Stack>
      </Stack>
      {editPage && <UserEdit onClose={handleEditClose} />}
    </>
  );
}

export default User;
