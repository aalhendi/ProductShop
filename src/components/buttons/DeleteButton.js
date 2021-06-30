//Style
import { DeleteButtonStyled } from "../../styles.js";
//State & Store
import productStore from "../../stores/productStore.js";

const DeleteButton = (props) => {
  const handleDelete = () => {
    productStore.deleteProduct(props.productId);
  };

  return (
    <DeleteButtonStyled onClick={() => handleDelete()}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
