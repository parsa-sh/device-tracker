import Map from "./../components/Map";
import Cards from "./../components/Cards";
import { useUserStore } from "../utils/userStore";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

function Home() {
  const loggedInUser = useUserStore((state) => state.loggedInUser);
  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      setWelcome(true);
    }
  }, [loggedInUser]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setWelcome(false);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Cards />
      <Map />
      <Snackbar
        open={welcome}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          خوش آمدید , {loggedInUser?.name}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;
