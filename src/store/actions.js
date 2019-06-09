import shop from "../api/shop";

export default {
  // = methods
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      // make the call
      // call setProducts mutation
      shop.getProducts(products => {
        commit("setProducts", products);
        resolve();
      });
    });
  }
};
