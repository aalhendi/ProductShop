//Imports
import slugify from "react-slugify";
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
      const res = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  updateProduct = async (updateProduct) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updateProduct.id}`,
        updateProduct
      );
      const product = this.products.find(
        (product) => product.id === updateProduct.id
      );
      product.name = updateProduct.name;
      product.price = updateProduct.price;
      product.description = updateProduct.description;
      product.image = updateProduct.image;
      // TODO: Refactor above (Oneline?)
      product.slug = slugify(updateProduct.name);
    } catch (error) {
      console.error(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
