import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authtentication from './Pages/Authtentication/Authtentication';
import Category from './Pages/Cattegory/Category';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/authentication" component={Authtentication} />
      <Route path="/categories" component={Category} />
      <Route path="/category-products" component={CategoryProducts} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
}

export default App;
