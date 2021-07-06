//Style
import { SubmitButton } from "../styles";
//Modal
import Modal from "react-modal";
//State & Store
import { useState } from "react";
import productStore from "../stores/productStore";

const ProductModal = (props) => {
  const emptyProduct = {
    name: "",
    price: "",
    description: "",
    image: "",
  };
  const [product, setProduct] = useState(props.oldProduct ?? emptyProduct);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.oldProduct) {
      productStore.updateProduct(product);
    } else {
      productStore.createProduct(product);
    }
    props.closeModal();
    setProduct(emptyProduct);
  };

  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Cookie Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Your Favorite Cookie"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cookie Price</label>
          <input
            className="form-control"
            type="number"
            placeholder="20"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cookie Description</label>
          <input
            className="form-control"
            type="text"
            placeholder="A Short Description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Cookie Image</label>
          <input
            className="form-control"
            type="file"
            multiple={false}
            onChange={handleImage}
          />
        </div>

        <SubmitButton>{props.oldProduct ? "Update" : "Add"}</SubmitButton>
      </form>
    </Modal>
  );
};

export default ProductModal;
