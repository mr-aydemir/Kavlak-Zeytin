<template>
  <div>
    <HeadContainer />
    <Showroom v-if="this.$route.name=='index'||this.$route.name=='productType'"/>
    <HeadCategoriesBar />
    <HeadKampanyalarBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeadContainer from '@/components/page-head/HeadContainer'
import HeadCategoriesBar from '@/components/page-head/HeadCategoriesBar'
import HeadKampanyalarBar from '@/components/page-head/HeadKampanyalarBar'
import Footer from '@/components/page-footer/Footer'
import Showroom from '@/components/anasayfa/Showroom'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: {
    HeadContainer,
    HeadCategoriesBar,
    HeadKampanyalarBar,
    Footer,
    Showroom
  },
  created() {
    this.fetchProducts();
    this.fetchCartItems();
    this.fetchCategoriesBarItems()
    
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      fetchCartItems: 'fetchCartItems',
      fetchCategoriesBarItems: 'fetchCategoriesBarItems',
    }),
  },
}
</script>
