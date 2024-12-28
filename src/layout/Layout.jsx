import { Route, Routes } from "react-router";
import { Box, Stack } from "@mui/material";
import Home from "./../pages/Home";
import Appbar from "./../components/Appbar";
import Sidebar from "./../components/Sidebar";
import Setting from "./../pages/Setting";
import AddDevice from "./../pages/AddDevice";
import User from "../pages/User";
import Trucks from "../pages/Trucks";
import Drivers from "../pages/Drivers";

function Layout() {

  return (
    <Stack direction={"column"}>
      <Appbar/>
      <Stack direction={"row-reverse"} width={"100%"}>
        <Sidebar />
        <Box width={"100%"} height={"100vh"}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/devices" element={<AddDevice />} />
            <Route path="/user" element={<User />} />
            <Route path="/trucks" element={<Trucks />} />
            <Route path="/drivers" element={<Drivers />} />
          </Routes>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Layout;
