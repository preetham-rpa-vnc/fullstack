import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewItems from "./components/HomePage/Cards/CardDetails";
import Home from "./components/HomePage/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cards from "./components/HomePage/Cards/Cards";
import CSSGrid from "./components/HomePage/Cards/grid";
import ProductDetails from "./components/ProductPage/ProductDetails";

function App() {
  return (
    <Router>
      <Home />
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Cards} />
      <Route path="/view" component={ViewItems} />
      <Route path="/product" component={ProductDetails} />
      <Route path="/grid" component={CSSGrid} />
    </Router>
  );
}

export default App;
