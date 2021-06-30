//Router
import { useParams, Redirect, Link } from "react-router-dom";
//Style
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
//State & Store
import { observer } from "mobx-react";
import productStore from "../stores/productStore";

const ProductDetail = () => {
  const productSlug = useParams().productSlug;
  const product = productStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) {
    return <Redirect to="/products" />;
  }
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <Link to="/products">
        <button>Exit</button>
      </Link>
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default observer(ProductDetail);
