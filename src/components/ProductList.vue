<template>
  <div>
    <h1>Prtoduct List</h1>
    <ul>
      <li v-for="product in products">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
import shop from "@/api/shop";
import store from "@/store/index";

export default {
  data() {
    return {
      products: []
    };
  },

  created() {
    shop.getProducts(products => {
      this.products = products;
    });
  }
};
</script>

