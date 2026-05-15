import AppLayout from "./components/layout/AppLayout";

import Home from "./components/pages/Home";
import Progress from "./components/pages/Progress";
import Targets from "./components/pages/Targets";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/targets" element={<Targets />} />
            <Route path="/progress" element={<Progress />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
