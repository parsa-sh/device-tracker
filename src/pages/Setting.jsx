import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

function Setting() {
  const [row, setRow] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    { field: "id", headerName: "شناسه" , width:200 },
    { field: "last_device", headerName: "آخرین دستگاه", width: 300 },
    { field: "serial", headerName: "سریال دستگاه", width: 300 },
    {
      field: "status",
      headerName: "وضعیت",
      width: 100,
      renderCell: (params) => (
        <div
          style={
            params.value === "unlocked"
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
          {params.value === "unlocked" ? "باز" : "قفل"}
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/locks");
        const formattedRows = response.data.map((r) => ({
          id: r.id,
          last_device: r.last_device,
          serial: r.serial,
          status: r.status,
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
      <Stack maxWidth={"91vw"} maxHeight={"100vh"}>
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
              alignItems: "center",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer":{
              width:"100%",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            },
            "& .MuiDataGrid-virtualScroller":{
              paddingX:"24px"
            },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Setting;
