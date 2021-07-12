import { makeAutoObservable } from "mobx";
import instance from "./instance";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  createUser = async (newUser) => {
    await instance.post("/signup", newUser);
  };
}

const authStore = new AuthStore();
export default authStore;
