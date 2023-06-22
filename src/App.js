import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Home from "./components/home/Home";
import ContactUs from "./components/contactUs/ContactUs";
import NoPage from "./components/noPage/NoPage";
import AboutUs from "./components/aboutUs/AboutUs";
import Franchise from "./components/franchise/Franchise";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
