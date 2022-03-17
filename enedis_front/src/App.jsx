import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Camera from "./components/Camera";
import Geo from "./components/Geo";
import UserProvider from "./contexts/UserProvider";
import Disconnect from "./components/disconnect/Disconnect";
import AdminPanel from "./components/admin/admin-panel/AdminPanel";
import AdminRoutes from "./components/admin/admin-routes/AdminRoutes";
import Login from "./components/login/Login";

function App() {
  Camera.startCamera();
  Camera.takeSnapshot();
  return (
    <div className="App">
      <Camera />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/disconnect" element={<Disconnect />} />
          <Route path="/admin" element={<AdminRoutes />}>
            <Route index element={<AdminPanel />} />
          </Route>
        </Routes>
      </UserProvider>
      <Geo />
    </div>
  );
}

export default App;
