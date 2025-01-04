import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function Trucks() {
  const [row, setRow] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    { field: "car_id", headerName: "شناسه" ,width:100},
    { field: "license_plate", headerName: "شماره پلاک", width: 250 },
    { field: "model", headerName: "مدل ماشین", width: 250 },
    { field: "driver_id", headerName: "شناسه راننده", width: 110 },
    { field: "driver_name", headerName: "نام راننده", width: 150 },
    { field: "device_id", headerName: "شناسه دستگاه", width: 150 },
    { field: "imei", headerName: "شناسه بین المللی", width: 250 },
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
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/trucks");
        const formattedRows = response.data.map((r) => ({
          id: r.car_id,
          car_id: r.car_id,
          model: r.model,
          license_plate: r.license_plate,
          driver_id: r.driver_id,
          driver_name: r.driver_name,
          device_id: r.device_id,
          imei: r.imei,
          is_active: r.is_active,
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
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
export default Trucks;
