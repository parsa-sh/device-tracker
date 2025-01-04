import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

function Drivers() {
  const [row, setRow] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    { field: "driver_id", headerName: "شناسه" },
    { field: "name", headerName: "نام", width: 300 },
    { field: "email", headerName: "ایمیل", width: 300 },
    { field: "licence_number", headerName: "شماره پلاک", width: 400 },
    {
      field: "is_active",
      headerName: "فعال",
      width: 100,
      renderCell: (params) => (
        <div
          style={
            params.value
              ? {
                  backgroundColor: "green",
                  textAlign: "center",
                  width: "55%",
                  height: "80%",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  backgroundColor: "red",
                  textAlign: "center",
                  width: "55%",
                  height: "80%",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
          }
        >
          {params.value ? "بله" : "خیر"}
        </div>
      ),
    },
    {
      field: "is_verified",
      headerName: "تایید",
      width: 100,
      renderCell: (params) => (
        <div
          style={
            params.value
              ? {
                  backgroundColor: "green",
                  textAlign: "center",
                  width: "55%",
                  height: "80%",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : {
                  backgroundColor: "red",
                  textAlign: "center",
                  width: "55%",
                  height: "80%",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
          }
        >
          {params.value ? "بله" : "خیر"}
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/drivers");
        const formattedRows = response.data.map((r) => ({
          id: r.driver_id,
          driver_id: r.driver_id,
          name: r.name,
          email: r.email,
          licence_number: r.licence_number,
          is_active: r.is_active,
          is_verified: r.is_verified,
        }));
        setRow(formattedRows);
      } catch (error) {
        console.log("error fetching driver data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <Stack
      sx={{ direction: "rtl" }}
      overflow={"hidden"}
      justifyContent={"center"}
      padding={"12px"}
      maxHeight={"100vh"}
    >
      <Stack maxWidth={"100vw"} maxHeight={"100vh"}>
        <DataGrid
          rows={row}
          columns={columns}
          loading={loading}
          disableSelectionOnClick
          disableColumnFilter={true}
          disableColumnMenu={true}
          disableColumnResize={true}
          disableAutosize={true}
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Drivers;
