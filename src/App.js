import "./App.scss";
// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./components/redux/store";
// Components
import Home from "./components/home/Home";
import ContactUs from "./components/contactUs/ContactUs";
import NoPage from "./components/noPage/NoPage";
import AboutUs from "./components/aboutUs/AboutUs";
import Franchise from "./components/franchise/Franchise";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import MenuModal from "./components/menu/menuModal/MenuModal";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="products/:productId" element={<MenuModal />} /> */}
            <Route path="/:productId" element={<MenuModal />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
