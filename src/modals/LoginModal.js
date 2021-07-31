//Style
import { SubmitButton } from "../styles";
//Modal
import Modal from "react-modal";
//State & Store
import { useState } from "react";
import authStore from "../stores/authStore";

const LoginModal = ({ closeModal, isModalOpen }) => {
  const emptyUser = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(emptyUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.login(user);
    closeModal();
    setUser(emptyUser);
    e.target.reset();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Login Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <SubmitButton>Login</SubmitButton>
      </form>
    </Modal>
  );
};

export default LoginModal;
