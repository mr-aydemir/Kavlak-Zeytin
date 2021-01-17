<template>
  <div>
    <ProductList :categoryID="''"/>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
export default {
  components: {
    ProductList
  }
}
</script>