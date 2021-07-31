// Style
import { ListWrapper } from "../styles";
import { AddIcon } from "../styles";
// Components
import ProducerItem from "./ProducerItem";
import SearchBar from "./SearchBar";
import ProducerModal from "../modals/ProducerModal";
// State & Stores
import { useState } from "react";
import { observer } from "mobx-react";
import producerStore from "../stores/producerStore";
import authStore from "../stores/authStore";

const ProducerList = () => {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const producerList = producerStore.producers
    .filter((producer) => producer.name.includes(query))
    .map((producer) => <ProducerItem producer={producer} key={producer.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {authStore.user && <AddIcon size="2em" onClick={openModal} />}
      <ProducerModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <ListWrapper>{producerList}</ListWrapper>
    </>
  );
};

export default observer(ProducerList);
