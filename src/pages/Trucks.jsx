import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useThemeStore } from "../utils/userStore";

function Trucks() {
  const [row, setRow] = useState([]);
  const { theme } = useThemeStore();
  const [rowCount, setRowCount] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      field: "id",
      headerName: "شناسه",
      width: 100,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "licensePlate",
      headerName: "شماره پلاک",
      width: 250,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "model",
      headerName: "مدل ماشین",
      width: 250,
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
    },
    {
      field: "is_active",
      headerClassName: "grid--header",
      cellClassName: "grid--cell",
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
          {" "}
          {params.value ? "بله" : "خیر"}
        </div>
      ),
    },
  ];

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://192.168.88.17:8000/api/cars/`, {
        params: { page: page + 1 },
      });
      const { results, count } = response.data;
      setRow(
        results.map((r) => ({
          id: r.id,
          model: r.model,
          licensePlate: r.license_plate,
          is_active: r.is_active,
        }))
      );
      setRowCount(count);
    } catch (error) {
      console.log("error fetching driver data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { page, pageSize } = paginationModel;
    fetchData(page, pageSize);
  }, [paginationModel]);

  const handlePaginationChange = (model) => {
    setPaginationModel(model);
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
        <Stack maxWidth={"100vw"} maxHeight={"100vh"}>
          <DataGrid
            pagination
            rows={row}
            rowCount={rowCount}
            columns={columns}
            loading={loading}
            disableSelectionOnClick
            disableColumnFilter={true}
            disableColumnMenu={true}
            disableColumnResize={true}
            disableAutosize={true}
            paginationMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={handlePaginationChange}
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
                    "& .MuiDataGrid-filler":{
                      background:"#1C1C1E"
                    },
                    "& .MuiTablePagination-displayedRows":{
                      visibility:"hidden"
                    },
                    "& .MuiTablePagination-actions":{
                      display:"flex",
                      flexDirection:"row-reverse",
                      "& .MuiSvgIcon-root":{
                      fontSize:"24px",
                      background:"#e8e8e8",
                      borderRadius:"50%"
                    },
                    },
                    
                    "& .MuiToolbar-root":{
                      paddingY:"20px"
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
                    "& .MuiTablePagination-displayedRows":{
                      visibility:"hidden"
                    },
                    "& .MuiTablePagination-actions":{
                      display:"flex",
                      flexDirection:"row-reverse",
                      "& .MuiSvgIcon-root":{
                      fontSize:"24px",
                      background:"#e8e8e8",
                      borderRadius:"50%"
                    },
                    },
                    
                    "& .MuiToolbar-root":{
                      paddingY:"20px",
                      
                    },
                  }
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
}
export default Trucks;
