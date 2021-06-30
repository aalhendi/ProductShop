//Routers
import { Link } from "react-router-dom";
//State and Store
import { observer } from "mobx-react";
//Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
//Style
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div>
      <ProductWrapper>
        <Link to={`/products/${product.slug}`}>
          <img alt={product.name} src={product.image} />
        </Link>
        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
      </ProductWrapper>
      <UpdateButton product={product} />
      <DeleteButton productId={product.id} />
    </div>
  );
};

export default observer(ProductItem);
