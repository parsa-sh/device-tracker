/* eslint-disable react/prop-types */
import { useThemeStore } from "../utils/userStore";
import { Button } from "@mui/material";



function LocksPopup({popup , history , handleClose}) {
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
              overflowX:"hidden"

            }
          : { visibility: "hidden" }
      }
    >
      {history === undefined ? (
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
              overflowX:"hidden"

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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "end",
              flexDirection: "column",
            }}
          >
            <span>{history.lock_id} : شناسه قفل</span>
            <span>{history.device_id} : شناسه دستگاه</span>
            <span>{history.device} : اطلاعات دستگاه</span>
            <span>{history.lock} : شناسه قفل</span>
          </div>
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

export default LocksPopup;
