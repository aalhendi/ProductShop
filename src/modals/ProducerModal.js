//Style
import { SubmitButton } from "../styles";
//Modal
import Modal from "react-modal";
//State & Store
import { useState } from "react";
import producerStore from "../stores/producerStore";

const ProducerModal = ({ closeModal, isModalOpen }) => {
  const emptyProducer = {
    name: "",
    image: "",
  };
  const [producer, setProducer] = useState(emptyProducer);

  const handleChange = (e) => {
    setProducer({ ...producer, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setProducer({ ...producer, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    producerStore.createProducer(producer);
    closeModal();
    setProducer(emptyProducer);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Add Producer Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Producer Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Producer Name"
            name="name"
            value={producer.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Producer Image</label>
          <input
            className="form-control"
            type="file"
            multiple={false}
            onChange={handleImage}
          />
        </div>

        <SubmitButton>{"Add"}</SubmitButton>
      </form>
    </Modal>
  );
};

export default ProducerModal;
