<template>
  <section id="covercontainer " class="pt-4">
    <div class="deneme" v-if="!products">
      <img  src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif" alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif">
    </div>
    <div class="container" v-else>
      <!-- /.container -->
      <div class="row">
        <!-- .row -->
        <ProductButton v-for="product in getFilteredProductList" :key="product.id" :productID="product.id" />
      </div>
      <!-- /.row -->
    </div>
    <!-- /.cotainer -->
  </section>
</template>

<script>
import ProductButton from '../components/buttons/ProductButton'
import { mapActions, mapGetters,mapState } from 'vuex'
export default {
  components: {
    ProductButton,
  },
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    ...mapGetters({
      getProductsWithCategory: 'getProductsWithCategory',
    }),
    getFilteredProductList(){
      if (this.categoryName!=''&&this.categoryName!=undefined) {
        return this.getProductsWithCategory(this.categoryName)
      }
      return this.products;
    }
  }
}
</script>
