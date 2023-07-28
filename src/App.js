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
import Branch from "./components/branch/Branch";
import CartCompletingInformation from "./components/cart/cartCompletingInformation/CartCompletingInformation";
import CartPaymentPage from "./components/cart/cartPaymentPage/CartPaymentPage";
import Faq from "./components/faq/Faq";
import Dashboard from "./components/dashboard/Dashboard";
import OrderTracking from "./components/dashboard/orderTracking/OrderTracking";

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
            <Route path="/branch" element={<Branch />} />
            <Route
              path="/cartCompletingInformation"
              element={<CartCompletingInformation />}
            />
            <Route path="/CartPaymentPage" element={<CartPaymentPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orderTracking" element={<OrderTracking />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
