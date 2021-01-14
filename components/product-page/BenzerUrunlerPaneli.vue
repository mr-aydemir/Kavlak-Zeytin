
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
    ...mapGetters({
      getCategoryWithId: 'getCategoryWithId',
      formatPrice: 'formatPrice',
      getOddNumberProducts: 'getOddNumberProducts',
    }),
    ...mapState({
      products: (state) => state.products,
    }),
  },
  methods: {
    ...mapActions({
      sepeteEkle: 'sepeteEkle',
    }),
    AddToBasket(id) {
      var pid = id
      var count = 1
      this.sepeteEkle({ pid, count })
    },
    indexDegisimi() {
      setInterval(
        function () {
          this.carouselIndexChanging = true
          setTimeout(() => (this.carouselIndexChanging = false), 750)
          var length =
            Math.floor(this.products.length ? this.products.length : 0) / 2 - 1
          this.carouselIndex == length
            ? (this.carouselIndex = 0)
            : this.carouselIndex++
        }.bind(this),
        5000
      )
    },
  },
  mounted() {
    this.indexDegisimi()
  },
}
</script>
<template>
  <div class="details col-lg-2 p0 m0 ml-auto BenzerUrunler">
    <!--Carousel Wrapper-->
    <div
      id="carousel-with-lb"
      class="carousel slide carousel-multi-item"
      data-ride="carousel"
    >
      <!--Slides and lightbox-->

      <div class="carousel-inner sagslider pl-2" role="listbox">
        <div class="bex text-center h5 py-3" style="">Benzer Ürünler</div>
        <div id="mdb-lightbox-ui "></div>
        <div class="deneme" v-if="!products">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
            alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
          />
        </div>
        <!--First slide-->
        <div
          v-else
          class="carousel-item text-center"
          :class="{
            active: carouselIndex === index - 1 || carouselIndexChanging,
            'carousel-item-next':
              carouselIndex !== index - 1 && carouselIndexChanging,
            'carousel-item-left': carouselIndexChanging,
          }"
          v-for="index in Math.floor(products.length / 2)"
          :key="index"
        >
          <figure
            class="col-md-12 d-md-inline-block py-3"
            style="border: 1px solid #ddd"
          >
            <!-- Odd Numbers -->
            <nuxt-link
              :to="{
                name: 'productType-productID',
                params: {
                  productID: products[(index - 1) * 2].id,
                  productType: getCategoryWithId(
                    products[(index - 1) * 2].categoryID
                  ).name,
                },
              }"
              id="ctl00_ContentPlaceHolder1_data_vitrin_benzer_urunler1_ctl00_lnk_urun_resim"
            >
              <img
                :src="products[(index - 1) * 2].images[0]"
                class="img-fluid resimslidersag"
                style="height: 145px !important; margin-top: 25px"
              />

              <div style="height: 70px">
                <div class="mh-100">
                  <small
                    class="card-title size12 text-muted"
                    id="cardtitlbaslik"
                    style="line-height: 1em"
                    >{{ products[(index - 1) * 2].name }}</small
                  >
                </div>
              </div>
              <h6
                class="card-title h5 font-weight-bold text-dark"
                id="fiyatsagslider"
                style="line-height: 1em"
              >
                {{ formatPrice(products[(index - 1) * 2].price) }} TL
              </h6> </nuxt-link
            ><a
              class="badge float-left"
              style="position: static; margin-left: -24px; background: red"
              >Sadece</a
            ><br />

            <input
              type="image"
              name="ctl00$ContentPlaceHolder1$data_vitrin_benzer_urunler1$ctl00$Button2"
              id="ctl00_ContentPlaceHolder1_data_vitrin_benzer_urunler1_ctl00_Button2"
              src="https://kavlak.com.tr/img/button/sepeteekle.png"
              class="img-fluid pb-3"
              style="width: 110px; border-width: 0px; position: static"
              @click="AddToBasket(products[(index - 1) * 2].id)"
            /><br />
            <!-- Even Numbers -->
            <nuxt-link
              :to="{
                name: 'productType-productID',
                params: {
                  productID: products[(index - 1) * 2 + 1].id,
                  productType: getCategoryWithId(
                    products[(index - 1) * 2 + 1].categoryID
                  ).name,
                },
              }"
              id="ctl00_ContentPlaceHolder1_data_vitrin_benzer_urunler1_ctl01_lnk_urun_resim"
            >
              <img
                :src="products[(index - 1) * 2 + 1].images[0]"
                class="img-fluid resimslidersag"
                style="height: 145px !important; margin-top: 25px"
              />

              <div style="height: 70px">
                <div class="mh-100">
                  <small
                    class="card-title size12 text-muted"
                    id="cardtitlbaslik"
                    style="line-height: 1em"
                    >{{ products[(index - 1) * 2 + 1].name }}</small
                  >
                </div>
              </div>
              <h6
                class="card-title h5 font-weight-bold text-dark"
                id="fiyatsagslider"
                style="line-height: 1em"
              >
                {{ formatPrice(products[(index - 1) * 2 + 1].price) }} TL
              </h6> </nuxt-link
            ><a
              class="badge float-left"
              style="position: static; margin-left: -24px; background: red"
              >Sadece</a
            ><br />

            <input
              type="image"
              name="ctl00$ContentPlaceHolder1$data_vitrin_benzer_urunler1$ctl01$Button2"
              id="ctl00_ContentPlaceHolder1_data_vitrin_benzer_urunler1_ctl01_Button2"
              src="https://kavlak.com.tr/img/button/sepeteekle.png"
              class="img-fluid pb-3"
              style="width: 110px; border-width: 0px; position: static"
              @click="AddToBasket(products[(index - 1) * 2 + 1].id)"
            /><br />
          </figure>
        </div>
        <!--/.First slide-->
      </div>
      <!--/.Slides-->
    </div>
    <!--/.Carousel Wrapper-->
  </div>
</template>
<style scoped src="@/assets/styles/urun-detay.css">
</style>