import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";

import axios from "axios";

function AddDevice() {
  const [row, setRow] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    { field: "id", headerName: "شناسه", width: 150 },
    { field: "name", headerName: "نام دستگاه", width: 150 },
    { field: "model", headerName: "مدل ماشین", width: 200 },
    { field: "serial_number", headerName: "سریال دستگاه", width: 200 },
    { field: "imei", headerName: "شناسه بین المللی", width: 200 },
    {
      field: "locks",
      headerName: "قفل ها",
      width: 400,
      renderCell: (params) => {
        const locks = params.value;

        if (!locks || !Array.isArray(locks)) {
          return <span>اطلاعات قفل‌ها موجود نیست</span>;
        }

        return (
          <SimpleTreeView
          >
            {locks.map((lock) => (
              <TreeItem
                key={lock.lock_id}
                itemId={lock.lock_id}
                label={`سریال: ${lock.serial_number} ---------- وضعیت: ${lock.status==="locked"?"قفل":"باز"}`}
              />
            ))}
          </SimpleTreeView>
        );
      },
    },

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
                  height: "60%",
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
        const response = await axios.get("http://localhost:7000/devices");
        const formattedRows = response.data.map((r) => ({
          id: r.id,
          name: r.name,
          serial_number: r.serial_number,
          imei: r.imei,
          is_active: r.is_active,
          locks: r.locks || [],
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
      <Stack maxWidth={"90vw"} maxHeight={"85vh"}>
        <DataGrid
          rows={row}
          columns={columns}
          loading={loading}
          disableSelectionOnClick
          disableColumnFilter={true}
          disableColumnMenu={true}
          disableColumnResize={true}
          disableAutosize={true}
          rowHeight={80}
          sx={{
            borderRadius: "12px",
            "& .MuiDataGrid-columnHeaders": {
              position: "sticky",
              top: 0,
              zIndex: 1000,
              
            },
            "& .MuiDataGrid-cell": {
              display:"flex",
              justifyContent:"flex-start",
              alignItems:"center"
            },
            "& .MuiDataGrid-virtualScroller":{
              paddingX:"24px"
            },
            "& .MuiDataGrid-columnHeaderTitleContainer":{
              width:"100%",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }
          }}
        />
      </Stack>
    </Stack>
  );
}

export default AddDevice;
