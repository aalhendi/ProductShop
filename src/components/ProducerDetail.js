//Router
import { useParams, Redirect, Link } from "react-router-dom";
//Style
import { DetailWrapper } from "../styles";

//Components
import ProductList from "./ProductList";

//State & Store
import { toJS } from "mobx";
import { observer } from "mobx-react";
import producerStore from "../stores/producerStore";

const ProducerDetail = () => {
  const producerSlug = useParams().producerSlug;
  const producer = producerStore.producers.find(
    (producer) => producer.slug === producerSlug
  );
  console.log(toJS(producer));

  if (!producer) {
    return <Redirect to="/producers" />;
  }

  const products = producer.products;

  return (
    <DetailWrapper>
      <h1>{producer.name}</h1>
      <img src={producer.image} alt={producer.name} />
      <ProductList products={products} producer={producer} />
      <Link to="/producer">
        <button>Exit</button>
      </Link>
    </DetailWrapper>
  );
};

export default observer(ProducerDetail);
