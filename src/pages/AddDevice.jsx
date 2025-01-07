import { useCallback, useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useThemeStore } from "../utils/userStore";
import axios from "axios";

function AddDevice() {
  const [row, setRow] = useState([]);
  const { theme } = useThemeStore();
  const [lockHistory, setLockHistory] = useState([]);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      field: "id",
      headerName: "شناسه",
      width: 150,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "imei",
      headerName: "شناسه بین المللی",
      width: 200,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "type",
      headerName: "مدل",
      width: 200,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "company",
      headerName: "شرکت",
      width: 200,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "is_active",
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
      headerName: "فعال",
      flex: 1,
      width: 100,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height:"100%"
          }}
        >
          <div
            style={
              params.value
                ? {
                    backgroundColor: "green",
                    textAlign: "center",
                    width: "5%",
                    height: "35px",
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
                    width: "5%",
                    height: "35px",
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
          <Button
            onClick={() => handleHistorySelect(params.row.id)}
            variant="contained"
            sx={{ fontWeight: "700" }}
            disableElevation
          >
            تاریخچه قفل ها
          </Button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.88.17:8000/api/devices/"
        );
        const formattedRows = response.data.map((r) => ({
          id: r.id,
          imei: r.imei,
          type: r.type,
          company: r.company,
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

  const handleHistorySelect = useCallback(async (arg) => {
    try {
      const res = await axios.get(
        `http://192.168.88.17:8000/api/devices/${arg}/locks/`
      );
      setLockHistory(res.data);
      setPopup(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(lockHistory);

  const handleClose = () => {
    setPopup(false);
    setLockHistory([]);
  };

  return (
    <Box height={"100%"} bgcolor={theme === "light" ? "white" : "#1C1C1E"}>
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
                    "& .MuiDataGrid-filler": {
                      background: "#1C1C1E",
                    },
                    "& .MuiTablePagination-displayedRows": {
                      visibility: "hidden",
                    },
                    "& .MuiTablePagination-actions": {
                      display: "flex",
                      flexDirection: "row-reverse",
                      "& .MuiSvgIcon-root": {
                        fontSize: "24px",
                        background: "#e8e8e8",
                        borderRadius: "50%",
                      },
                    },

                    "& .MuiToolbar-root": {
                      paddingY: "20px",
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
                    "& .MuiTablePagination-displayedRows": {
                      visibility: "hidden",
                    },
                    "& .MuiTablePagination-actions": {
                      display: "flex",
                      flexDirection: "row-reverse",
                      "& .MuiSvgIcon-root": {
                        fontSize: "24px",
                        background: "#e8e8e8",
                        borderRadius: "50%",
                      },
                    },

                    "& .MuiToolbar-root": {
                      paddingY: "20px",
                    },
                  }
            }
          />
        </Stack>
      </Stack>
      <div
        style={
          popup
            ? {
                position: "absolute",
                top: "50%",
                left: "50%",
                zIndex: "10000",
                background: "#474747a6",
                width: "100%",
                height: "100%",
                transform: "translate(-50% , -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : { visibility: "hidden" }
        }
      >
        {lockHistory.length === 0 ? (
          <div
            style={
              theme === "dark"
                ? {
                    background: "#1C1C1E",
                    color: "white",
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "24px",
                    padding: "24px",
                    fontSize: "54px",
                  }
                : {
                    background: "white",
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    borderRadius: "24px",
                    padding: "24px",
                    fontSize: "54px",
                  }
            }
          >
            تاریخچه ای یافت نشد
            <Button
              variant="contained"
              sx={{ marginX: "45%", fontWeight: "700" }}
              onClick={handleClose}
              disableElevation
            >
              بستن
            </Button>
          </div>
        ) : (
          <div
            style={
              theme === "dark"
                ? {
                    background: "#1C1C1E",
                    color: "white",
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "24px",
                    padding: "24px",
                    justifyContent: "space-between",
                  }
                : {
                    background: "white",
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "24px",
                    padding: "24px",
                    justifyContent: "space-between",
                  }
            }
          >
            {lockHistory.map((e, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "end",
                  flexDirection: "column",
                }}
              >
                <span>{e.device} : اطلاعات دستگاه</span>
                <span>{e.lock} : شناسه قفل</span>
                <span>{e.lock_id} : شناسه قفل</span>
                <span>{e.device_id} : شناسه دستگاه</span>
              </div>
            ))}

            <Button
              variant="contained"
              sx={{ fontWeight: "700", marginX: "45%" }}
              onClick={handleClose}
              disableElevation
            >
              بستن
            </Button>
          </div>
        )}
      </div>
    </Box>
  );
}

export default AddDevice;
