import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProducerStore {
  producers = [];
  loading = true; // Not render before data is fetched

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducers = async () => {
    try {
      const res = await instance.get("/producers");
      this.producers = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error in fetchProducers: ", error);
    }
  };

  createProducer = async (newProducer) => {
    try {
      const formData = new FormData();
      for (const key in newProducer) {
        formData.append(key, newProducer[key]);
      }
      const res = await instance.post("/producers", formData);
      res.data.products = [];
      this.producers.push(res.data);
    } catch (error) {
      console.error("error in createProducer: ", error);
    }
  };
}

const producerStore = new ProducerStore();
producerStore.fetchProducers();

export default producerStore;
