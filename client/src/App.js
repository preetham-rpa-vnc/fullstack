import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewItems from "./components/HomePage/Cards/CardDetails";
import Home from "./components/HomePage/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cards from "./components/HomePage/Cards/Cards";
import CSSGrid from "./components/HomePage/Cards/grid";
import ProductDetails from "./components/ProductPage/ProductDetails";
import Footer from "./components/HomePage/Footer/Footer";
import Header from "./components/Header/Header";
import OtpVerification from "./components/OtpVerification/OtpVerifiction";
import AddProduct from "./components/Admin/AddProduct";
import LandingPage from "./components/LandingPage/LandingPage";
import UserLocation from "./components/UserLocation/UserLocation";
import Weather from "./components/Weather/Weather";
import ForcasteWeathers from "./components/Weather/ForecasteWeather";
import ForcasteWeather from "./components/ForecastWeather/ForecastWeather";
import Categories from "./components/Caregories/Categories";
import OtpAuth from "./components/Auth/SignIn/OtpAuth";
import OtpValidation from "./components/Auth/SignIn/OtpValidation";

import ItemDetails from './components/ItemDetails/ItemDetails';
function App() {
  return (
    <Router>
      <Home />
      <Route exact path="/" component={LandingPage} />
      <Route path="/otp" component={OtpAuth} />
      <Route path="/valid" component={OtpValidation} />
      <Route path="/login" component={SignIn} />
      <Route exact path="/home" component={LandingPage} />
      <Route exact path="/itemDetails" component={ItemDetails} />
      <Route exact path="/categories" component={Categories} />
      {/* <Route exact path="/" component={SignIn} /> */}
      <Route path="/otpauth" component={OtpVerification} />
      <Route path="/signup" component={SignUp} />
      <Route path="/landingPage" component={Cards} />
      <Route path="/view" component={ViewItems} />
      <Route path="/product" component={ProductDetails} />
      <Route path="/grid" component={CSSGrid} />
      <Route path="/admin" component={AddProduct} />
      <Route path="/location" component={UserLocation} />
      <Route path="/weath" component={Weather} />
      <Route path="/weather" component={ForcasteWeathers} />
      <Route path="/forecast" component={ForcasteWeather} />
      <Footer />
    </Router>
  );
}

export default App;
