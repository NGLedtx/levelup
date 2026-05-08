import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Progress from "./components/pages/Progress";
import Targets from "./components/pages/Targets";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col justify-center h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/targets" element={<Targets />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}
export default App;
