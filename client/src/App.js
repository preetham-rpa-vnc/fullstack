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
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Home />
      <Route exact path="/landingPage" component={LandingPage} />
      <Route exact path="/" component={SignIn} />
      <Route path="/otpauth" component={OtpVerification} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Cards} />
      <Route path="/view" component={ViewItems} />
      <Route path="/product" component={ProductDetails} />
      <Route path="/grid" component={CSSGrid} />
      <Route path="/admin" component={AddProduct} />
      <Footer />
    </Router>
  );
}

export default App;
