<template>
  <ProductDetail :productID="productID" />
</template>

<script>
import ProductDetail from '@/components/product-page/ProductDetail'
import { mapActions } from 'vuex'
export default {
  components: {
    ProductDetail,
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
  data() {
    return {
      productID: this.$route.params.productID,
    }
  },
}
</script>
<style scoped src="@/assets/styles/urun-detay.css">
</style>