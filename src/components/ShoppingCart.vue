<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li
        v-for="product in products"
      >{{product.title}} quantity {{product.quantity}} price {{product.price | currency}}</li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotal"
    }),

    ...mapState({
      checkoutStatus: "checkoutStatus"
    })
  },

  methods: {
    ...mapActions(["checkout"])
  }
};
</script>

<style scoped>
</style>

