import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [token , setToken] = useState(false)
  const handleLogin = ()=>{
    setToken(true)
  }
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* <Route path="/*" element={token ? <Layout/> : <Navigate to="/login"/>} /> */}
        <Route path="/*" element={<Layout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
