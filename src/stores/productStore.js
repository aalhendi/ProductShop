//State & Store
import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProductStore {
  products = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    const res = await axios.get("http://localhost:8000/products");
    try {
      this.products = res.data;
    } catch (error) {
      console.error(error);
    }
  };

  deleteProduct = async (productID) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productID}`);
      this.products = this.products.filter(
        (product) => product.id !== productID
      );
    } catch (error) {
      console.error(error);
    }
  };

  createProduct = async (newProduct) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) {
        formData.append(key, newProduct[key]);
      }
      const res = await axios.post("http://localhost:8000/products", formData);

      this.products.push(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (updateProduct) => {
    try {
      const formData = new FormData();
      for (const key in updateProduct) {
        formData.append(key, updateProduct[key]);
      }
      const res = await axios.put(
        `http://localhost:8000/products/${updateProduct.id}`,
        formData
      );
      const product = this.products.find(
        (product) => product.id === updateProduct.id
      );
      for (const key in res.data) {
        product[key] = res.data[key];
      }
    } catch (error) {
      console.error(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
