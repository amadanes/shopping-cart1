import Vuex from "vuex";
import Vue from "vue";
//import shop from "@/api/shop";
import actions from "./actions";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: []
    // {id, quantity}
  },

  getters: {
    // = computed properties
  },

  actions,

  mutations: {}
});
