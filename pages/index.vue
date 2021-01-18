<template>
  <div>
    <ProductList :categoryName="''"/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import { mapActions } from 'vuex'
export default {
  components: {
    ProductList
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      fetchCartItems:'fetchCartItems'
    }),
  },
  created() {
    this.fetchProducts(),
    this.fetchCartItems();
  },
}
</script>