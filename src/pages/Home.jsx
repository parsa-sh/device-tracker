import Map from "./../components/Map";
import Cards from "./../components/Cards";
import { useUserStore } from "../utils/userStore";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import CardSection from "../components/CardSection";

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
      <CardSection />
      <Map />
      <Snackbar
        open={welcome}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical:"top" , horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width:{xs:"60%",sm:"100%"} , marginTop:"65px" }}>
          خوش آمدید , {loggedInUser?.name}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;
