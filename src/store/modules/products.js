export default {
  state: {},

  getters:{
      availableProducts(state, getters) {
          return state.products.filter(product => product.inventory > 0);
      },


      productIsInStock() {
          return product => {
              return product.inventory > 0;
          };
      }

  },

  mutations: {
      setProducts(state, products) {
          // update products
          state.products = products;
      },


      decrementProductInventory(state, product) {
          product.inventory--;
      }

  },

  actions: {}
};
