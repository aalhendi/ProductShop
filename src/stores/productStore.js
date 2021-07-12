//State & Store
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const res = await instance.get("/products");
      this.products = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error in fetchProducts", error);
    }
  };

  deleteProduct = async (productID) => {
    try {
      await instance.delete(`/products/${productID}`);
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
      const res = await instance.post(
        `/producers/${producer.id}/products`,
        formData
      );

      this.products.push(res.data);
      producer.push({ id: res.data.id });
    } catch (error) {
      console.error("error in createProduct: ", error);
    }
  };

  // FIXME: (MOVE ALL BUT GET PRODUCTS TO PRODUCER STORE)
  updateProduct = async (updateProduct) => {
    console.log(updateProduct);
    try {
      const formData = new FormData();
      for (const key in updateProduct) {
        formData.append(key, updateProduct[key]);
      }
      const res = await instance.put(`/products/${updateProduct.id}`, formData);
      // const product = this.getProductById(updateProduct.id);
      // const product = this.products.find((product) => product.id === updateProduct.id);
      // console.log(product, res.data);
      for (const key in res.data) {
        // product[key] = res.data[key];
        this.products.find((product) => product.id === updateProduct.id)[key] =
          res.data[key];
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
