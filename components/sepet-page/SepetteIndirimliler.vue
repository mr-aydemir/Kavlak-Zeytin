<template>
  <div id="ctl00_ContentPlaceHolder1_pnlSepeteOzelUrunler">
    <div class="deneme" v-if="!indirimliler">
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
        alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
      />
    </div>
    <div class="row" id="gizlesuprizindirim" v-else>
      <figure
        class="col-md-3 mt-2 mx-auto text-center d-none d-sm-block"
        v-for="product in indirimliler"
        :key="product.id"
      >
        <div
          style="
            border: 1px solid #ddd;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26),
              0 2px 19px 0 rgba(220, 220, 220, 0.26);
          "
        >
          <img
            :src="product.images[0]"
            class="img-fluid"
            width="147px"
            height="147px"
          />
          <div style="height: 70px">
            <div class="mh-100">
              <a
                class="font-weight-bold text-muted size14"
                id="cardtitlbaslik"
                >{{ product.name }}</a
              >
            </div>
          </div>
          <h6
            class="card-title h5 font-weight-bold text-dark"
            id="fiyatsagslider"
            style="line-height: 1em"
          >
            {{ formatPrice(product.price) }} tl
          </h6>
          <a
            class="badge float-left"
            style="position: static; margin-left: -10px; background: red"
            >Sadece</a
          >
          <br />

          <input
            type="image"
            name="ctl00$ContentPlaceHolder1$ImageButton1"
            id="ctl00_ContentPlaceHolder1_ImageButton1"
            src="https://kavlak.com.tr/img/button/sepeteekle.png"
            class="img-fluid pb-3 w-50 sepeteekleimgbtn"
            style="border-width: 0px; position: static; border: 0px"
              @click="AddToBasket(product.id)"
          />
        </div>
      </figure>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      formatPrice: 'formatPrice',
    }),
    ...mapState({
      indirimliler:(state)=>state.indirimliler
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      sepeteEkle: 'sepeteEkle',
    }),
    AddToBasket(id) {
      var pid = id
      var count = 1
      this.sepeteEkle({ pid, count })
    },
  },
  created() {
    this.fetchProducts()
  },
}
</script>