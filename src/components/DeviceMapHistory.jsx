/* eslint-disable react/prop-types */
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useThemeStore } from "../utils/userStore";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

function DeviceMapHistory({ popup, map, close }) {
  const { theme } = useThemeStore();
  const [detail, setDetail] = useState(false);
  const [marker, setMarker] = useState([]);

  const handleClick = (event) => {
    setDetail(true);
    setMarker(event);
  };

  const handleClose = () => {
    setDetail(false);
    setMarker([]);
  };
  return (
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
      {map.length === 0 ? (
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
            onClick={close}
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
                  color: "white",
                  width: "85%",
                  height: "80%",
                  position: "relative",
                  padding: "7px",
                  borderRadius: "24px",
                }
              : {
                  width: "85%",
                  height: "80%",
                  position: "relative",
                }
          }
        >
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <MapContainer
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
              }}
              zoom={5}
              scrollWheelZoom={true}
              center={[32.648487094050125, 51.67227251599078]}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {map.map((e, index) => (
                <Marker
                  position={
                    marker.length === 0
                      ? [e.long, e.lat]
                      : [marker.long, marker.lat]
                  }
                  key={index}
                  eventHandlers={{ click: () => handleClick(e) }}
                >
                  <Tooltip>
                    speed :{marker.length === 0 ? e.speed : marker.speed}
                  </Tooltip>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <IconButton
            sx={{
              position: "absolute",
              top: "7px",
              right: "7px",
              zIndex: "10000",
            }}
            onClick={close}
          >
            <CancelIcon sx={{ fontSize: "36px" }} />
          </IconButton>
          {detail && (
            <Box
              display={"flex"}
              flexDirection={"row-reverse"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              bottom={"18px"}
              width={"70%"}
              height={"20%"}
              bgcolor={theme === "light" ? "white" : "#1C1C1E"}
              zIndex={"1000"}
              left={"50%"}
              sx={{ transform: "translate(-50%)" }}
              borderRadius={"24px"}
              gap={"24px"}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: "7px",
                  right: "7px",
                  zIndex: "10000",
                }}
                onClick={handleClose}
              >
                <CancelIcon sx={{ fontSize: "36px" }} />
              </IconButton>
              <TextField
                size="small"
                label="نام راننده"
                value={marker.driver.name}
                dir="rtl"
                variant="outlined"
                sx={
                  theme === "dark"
                    ? {
                        "& .MuiInputBase-input.MuiOutlinedInput-input": {
                          color: "white",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root": {
                          color: "white",
                        },
                        "& .MuiInputLabel-shrink":{
                          top:"-2px",
                          right:"-37px"
                        },
                        "& .MuiOutlinedInput-notchedOutline":{
                            borderColor:"white"
                        }
                      }
                    : {"& .MuiInputLabel-shrink":{
                          top:"-2px",
                          right:"-37px"
                        },}
                }
              />
              <TextField
                size="small"
                label="پلاک ماشین"
                value={marker.car.license_plate}
                dir="rtl"
                variant="outlined"
                sx={
                  theme === "dark"
                    ? {
                        "& .MuiInputBase-input.MuiOutlinedInput-input": {
                          color: "white",
                        },
                        "& .MuiFormLabel-root.MuiInputLabel-root": {
                          color: "white",
                        },
                        "& .MuiInputLabel-shrink":{
                          top:"-2px",
                          right:"-37px"
                        },
                        "& .MuiOutlinedInput-notchedOutline":{
                            borderColor:"white"
                        }
                      }
                    : {"& .MuiInputLabel-shrink":{
                          top:"-2px",
                          right:"-37px"
                        },}
                }
              />
            </Box>
          )}
          {detail && (
            <div
              style={
                theme === "light"
                  ? {
                      position: "absolute",
                      bottom: "18px",
                      right: "18px",
                      backgroundColor: "white",
                      width: "12%",
                      height: "85%",
                      zIndex: "10000",
                      borderRadius: "24px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      overflowY: "scroll",
                      gap: "34px",
                      overflowX: "hidden",
                      color: "black",
                    }
                  : {
                      position: "absolute",
                      bottom: "18px",
                      right: "18px",
                      backgroundColor: "#1C1C1E",
                      width: "12%",
                      height: "85%",
                      zIndex: "10000",
                      borderRadius: "24px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      overflowY: "scroll",
                      gap: "34px",
                      overflowX: "hidden",
                      color: "white",
                    }
              }
            >
              {marker.locks_data.map((r, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    paddingRight: "24px",
                  }}
                >
                  <span>{r.lock} : شناسه قفل</span>
                  <span>
                    {r.lock_status === true ? "true" : "false"} : وضعیت
                  </span>
                  <span>{r.lock_battery} : میزان باطری</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DeviceMapHistory;
