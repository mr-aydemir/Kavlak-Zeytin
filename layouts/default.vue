<template>
  <div>
    <HeadContainer />
    <Showroom v-if="this.$route.name=='index'"/>
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
export default {
  components: {
    HeadContainer,
    HeadCategoriesBar,
    HeadKampanyalarBar,
    Footer,
    Showroom
  },
}
</script>
