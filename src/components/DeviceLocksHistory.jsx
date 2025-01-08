/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useThemeStore } from "../utils/userStore";

function DeviceLocksHistory({popup , lockHistory , handleClose}) {
  const { theme } = useThemeStore();

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
  );
}

export default DeviceLocksHistory;
