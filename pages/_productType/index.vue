<template>
  <ProductList :categoryID="CategoryID"/>
</template>
<script>
import ProductList from '@/components/ProductList'
export default {
  components: {
    ProductList,
  },
  mounted() {
    console.log('route: ' + this.$route.name)
  },
  data() {
    return {
      CategoryID: this.$route.params.productType,
    }
  },
}
</script>