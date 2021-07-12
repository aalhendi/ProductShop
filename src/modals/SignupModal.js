//Style
import { SubmitButton } from "../styles";
//Modal
import Modal from "react-modal";
//State & Store
import { useState } from "react";
import authStore from "../stores/authStore";

const SignupModal = ({ closeModal, isModalOpen }) => {
  const emptyUser = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  };
  const [user, setUser] = useState(emptyUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.createUser(user);
    closeModal();
    setUser(emptyUser);
    e.target.reset();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Sign Up Modal"
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

        <div className="mb-3">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <SubmitButton>"Sign up"</SubmitButton>
      </form>
    </Modal>
  );
};

export default SignupModal;
