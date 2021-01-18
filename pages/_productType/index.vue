<template>
  <ProductList :categoryName="CategoryName"/>
</template>
<script>
import ProductList from '@/components/ProductList'
export default {
  components: {
    ProductList,
  },
  mounted() {
    console.log('route: ' + this.$route.params.productType)
  },
  data() {
    return {
      CategoryName: this.$route.params.productType,
    }
  },
}
</script>