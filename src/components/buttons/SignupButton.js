import { Button } from "react-bootstrap";
import { useState } from "react";
import SignupModal from "../../modals/SignupModal";

const SignupButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <Button onClick={openModal}>Sign Up</Button>
      <SignupModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default SignupButton;
