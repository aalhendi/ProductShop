import { Button } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "../../modals/LoginModal";

const LoginButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Button onClick={openModal}>Login</Button>
      <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default LoginButton;
