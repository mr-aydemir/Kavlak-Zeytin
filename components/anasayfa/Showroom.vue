<template>
  <div>
    <div class="deneme" v-if="!showRoomProducts">
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
        alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
      />
    </div>
    <div
      v-else
      id="carousel-example-1z"
      class="carousel slide carousel-fade mx-auto d-block Slider"
      data-ride="carousel"
      style="margin-top: -36px; max-width: 2567px; z-index: 1"
    >
      <!--Indicators-->

      <!--/.Indicators-->
      <!--Slides-->
      <div class="carousel-inner" role="listbox" id="banner">
        <div
          class="carousel-item"
          :class="{ active: index === carouselIndex }"
          v-for="(item, index) in showRoomProducts"
          :key="item.productID"
        >
          <nuxt-link :to="item.link">
            <img class="img-fluid d-block w-100" :src="item.picture" alt="" />
          </nuxt-link>
        </div>

        <!--/Third slide-->
      </div>
      <!--/.Slides-->
      <!--Controls-->
      <div
        class="carousel-control-prev"
        role="button"
        data-slide="prev"
        @click="changeIndex(-1)"
      >
        <i
          class="fas fa-chevron-left d-none d-sm-block fa-2x bg-white text-black-50 p-3"
          aria-hidden="true"
        ></i>
        <span class="sr-only">Previous</span>
      </div>
      <div
        class="carousel-control-next"
        role="button"
        data-slide="next"
        @click="changeIndex(1)"
      >
        <i
          class="fas fa-chevron-right d-none d-sm-block fa-2x bg-white text-black-50 p-3"
          aria-hidden="true"
        ></i>
        <span class="sr-only">Next</span>
      </div>
      <!--/.Controls-->
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      carouselIndex: 0,
      carouselIndexChanging: false,
    }
  },
  computed: {
    ...mapState({
      showRoomProducts: (state) => state.showRoomProducts,
    }),
  },
  methods: {
    ...mapActions({
      fetchShowRoomProducts: 'fetchShowRoomProducts',
    }),
    changeIndex(count) {
      if (count > 0 && this.carouselIndex == this.showRoomProducts.length - 1) {
        this.carouselIndex = 0
      } else if (count < 0 && this.carouselIndex == 0) {
        this.carouselIndex = this.showRoomProducts.length - 1
      } else this.carouselIndex += count
    },
    indexDegisimi() {
      setInterval(
        function () {
          this.carouselIndexChanging = true
          setTimeout(() => (this.carouselIndexChanging = false), 750)
          this.changeIndex(1)
        }.bind(this),
        5000
      )
    },
  },
  created() {
    this.fetchShowRoomProducts();
    this.indexDegisimi();
  },
}
</script>