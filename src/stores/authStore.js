import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  createUser = async (newUser) => {
    const res = await instance.post("/register", newUser);
    this.user = decode(res.data.token);
  };

  login = async (userData) => {
    try {
      const res = await instance.post("/login", userData);
      this.user = decode(res.data.token);
    } catch (error) {
      console.error("Login: ", error);
    }
  };

  logout = (token) => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem("myToken");
	this.user = null;
  };

  /* Save the user session token in the localStorage */
  setUser = (token) => {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  /* Check if token exists for user session in localStorage
     Also check when token expires and handle that */
  checkForToken = () => {
    const token = localStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
