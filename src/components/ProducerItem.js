import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";

const ProducerItem = ({ producer }) => {
  return (
    <>
      <ProductWrapper>
        <h1>{producer.name}</h1>
        <Link to={`producers/${producer.slug}`}>
          <img stysrc={producer.image} alt={producer.name} />
        </Link>
      </ProductWrapper>
    </>
  );
};

export default ProducerItem;
