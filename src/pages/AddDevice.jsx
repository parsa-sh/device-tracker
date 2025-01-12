import { useCallback, useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useThemeStore } from "../utils/userStore";
import axios from "axios";
import DeviceLocksHistory from "../components/DeviceLocksHistory";
import DeviceMapHistory from "../components/DeviceMapHistory";

function AddDevice() {
  const [row, setRow] = useState([]);
  const { theme } = useThemeStore();
  const [lockHistory, setLockHistory] = useState([]);
  const [map, setMap] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);
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
            height: "100%",
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
          <Button
            onClick={() => handleMapSelect(params.row.id)}
            variant="contained"
            sx={{ fontWeight: "700" }}
            disableElevation
          >
            تاریخچه دستگاه
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

  const handleMapSelect = useCallback(async (arg) => {
    try {
      const res = await axios.get(
        `http://192.168.88.17:8000/api/devices/${arg}/history/`
      );

      const processedCards = res?.data.map((item) => {
        if (item.geo) {
          const match = item.geo.match(
            /POINT\s\(([-\d.]+)\s([-\d.]+)\)/
          );
          if (match) {
            const long = parseFloat(match[1]);
            const lat = parseFloat(match[2]);
            return { ...item, long, lat };
          }
        }
        return item;
      });

      setMap(processedCards);
      setPopup2(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClose = () => {
    setPopup(false);
    setLockHistory([]);
  };

  const handleCloseMap = () => {
    setPopup2(false);
    setMap([]);
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
      {popup && (
        <DeviceLocksHistory
          popup={popup}
          handleClose={handleClose}
          lockHistory={lockHistory}
        />
      )}
      {popup2 && (
        <DeviceMapHistory popup={popup2} map={map} close={handleCloseMap} />
      )}
    </Box>
  );
}

export default AddDevice;
