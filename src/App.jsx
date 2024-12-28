import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import { useUserStore } from "./utils/userStore";

function App() {
  const loggedInUser = useUserStore((state) => state.loggedInUser);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={loggedInUser ? <Layout /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
