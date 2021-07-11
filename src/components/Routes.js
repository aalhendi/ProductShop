import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ProducerList from "./ProducerList";
import ProducerDetail from "./ProducerDetail";
import { Route, Switch } from "react-router-dom";

import productStore from "../stores/productStore";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <ProductList products={productStore.products} />
        </Route>
        <Route path="/producers/:producerSlug">
          <ProducerDetail />
        </Route>
        <Route path="/producers">
          <ProducerList />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
