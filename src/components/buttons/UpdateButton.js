import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import ProductModal from "../../modals/productModal";

const UpdateButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProductModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        oldProduct={props.product}
      />
    </div>
  );
};

export default UpdateButton;
