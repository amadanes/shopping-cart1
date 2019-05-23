import Vuex from "vuex";
import Vue from "vue";
import { getIterator } from "core-js";

Vue.use(Vuex);

new vue.Store({
  sate: {
    // = data
    products: []
  },

  getters: {
    // computed properties
    productsCount() {
      // ...
    }
  },

  action: {
    // methods
    fetchProducts() {
      // make the call
    }
  },

  mutations: {
    // update the product
    setProducts() {}
  },

  modules: {
    //
  }
});
