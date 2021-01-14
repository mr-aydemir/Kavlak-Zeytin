<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
export default {
  components: {
    ProductList
  },
  mounted(){
    console.log("route: "+this.$route.name)
  }
}
</script>