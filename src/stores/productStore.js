//State & Store
import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      this.products = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error in fetchProducts", error);
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

  createProduct = async (newProduct, producer) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) {
        formData.append(key, newProduct[key]);
      }
      const res = await axios.post(
        `http://localhost:8000/producers/${producer.id}/products`,
        formData
      );

      this.products.push(res.data);
      producer.push({ id: res.data.id });
    } catch (error) {
      console.error("error in createProduct: ", error);
    }
  };

  // FIXME
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
      const product = this.getProductById(updateProduct.id);
      for (const key in res.data) {
        product[key] = res.data[key];
      }
    } catch (error) {
      console.error(error);
    }
  };

  getProductById = (productId) => {
    this.products.find((product) => product.id === productId);
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
