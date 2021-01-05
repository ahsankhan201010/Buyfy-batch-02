import { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authtentication from "./Pages/Authtentication/Authtentication";
import Category from "./Pages/Cattegory/Category";
import CategoryProducts from "./Pages/CategoryProducts/CategoryProducts";
import Checkout from "./Pages/Checkout/Checkout";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
import Test from "./Pages/Test/Test";
import Navbar from "./Components/Navbar/Navbar";
import Product from './Pages/Product/Product';

function App({ firebaseAuthListener }) {
  useEffect(() => {
    //CDM
    firebaseAuthListener();
  }, [firebaseAuthListener]);

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/authentication" component={Authtentication} />
        <Route path="/categories" component={Category} />
        <Route path="/category-products/:category" component={CategoryProducts} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/checkout/:orderId" component={Checkout} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListener,
};

export default connect(null, actions)(App);
