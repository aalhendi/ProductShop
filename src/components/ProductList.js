// Style
import { ListWrapper } from "../styles";
import { AddIcon } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import ProductModal from "../modals/productModal";
// State & Stores
import { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";

const ProductList = ({ products, producer }) => {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const productList = products
    .filter((product) => product.name.includes(query))
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {authStore.user && <AddIcon size="2em" onClick={openModal} />}
      <ProductModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        producer={producer}
      />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default observer(ProductList);
