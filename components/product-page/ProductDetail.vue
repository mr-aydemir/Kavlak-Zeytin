<template>
  <div class="container p0 m0 mx-auto">
    <div class="deneme" v-if="!getProductWithId(productID)">
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
        alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
      />
    </div>
    <div class="" v-else>
      <div class="row">
        <div class="col-lg-5 p-2" id="sliderkucukmobile">
          <!--/.Carousel Wrapper-->
          <ul
            class="preview-thumbnail nav nav-tabs p0 m0 pr-5 okecilgin"
            style="position: absolute; margin-left: -0.1em"
          >
            <li
              class="active"
              v-for="image in getProductWithId(productID).images"
              :key="image"
            >
              <a data-target="#pic-1" data-toggle="tab">
                <img :src="image" class="border mt-1"
              /></a>
            </li>
          </ul>
          <div
            class="preview-pic tab-content pl-5 pt-1"
            id="marginleft20"
            style="margin-left: 20px; z-index: 9999"
          >
            <div class="tab-pane active" id="pic-1">
              <a
                :href="getProductWithId(productID).images[imageIndex]"
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-md-4"
              >
                <img
                  :src="getProductWithId(productID).images[imageIndex]"
                  class="img-fluid border"
                />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="tab-pane" id="pic-2">
              <a
                href=""
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-md-4"
              >
                <img src="" class="img-fluid border" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div class="tab-pane" id="pic-3">
              <a
                href=""
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-md-4"
              >
                <img src="" class="img-fluid border" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>

          <div class="socialcover mr-auto d-block pt-2 pr-3">
            <small class="float-right text-muted">Bu Ürünü Paylaş…</small><br />
            <a
              target="_blank"
              href="https://www.facebook.com/zeytinkavlak/?ref=br_rs"
            >
              <img
                src="https://kavlak.com.tr/img/icon/facebook.png"
                class="img-fluid ml-1"
            /></a>
            <a
              target="_blank"
              href="https://www.instagram.com/zeytinkavlak/?hl=tr"
            >
              <img
                src="https://kavlak.com.tr/img/icon/inst.png"
                class="img-fluid ml-1"
            /></a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCtDRUaxIOWrszvWJfQVw1Jg"
            >
              <img
                src="https://kavlak.com.tr/img/icon/youtube.png"
                class="img-fluid ml-1"
            /></a>
            <a>
              <img
                src="/https://kavlak.com.tr/img/icon/twitter.png"
                class="img-fluid ml-1"
            /></a>
            <a>
              <img
                src="https://kavlak.com.tr/img/icon/pr.png"
                class="img-fluid ml-1"
            /></a>
            <a>
              <img
                src="https://kavlak.com.tr/img/icon/in.png"
                class="img-fluid ml-1"
            /></a>
          </div>
        </div>
        <div class="details col-lg-5 k_UrunDetay p-4">
          <h3
            class="font-weight-bold Helvatica text-capitalize uadii text-left"
          >
            {{ getProductWithId(productID).name }}
          </h3>
          <small class="text-muted size16 uaciklamaa text-left">
            {{ getProductWithId(productID).detail }}</small
          >
          <div class="rating">
            <div class="stars">
              <span class="fas fa-star size20" style="color: gold" v-if="getProductWithId(productID).rate>0"
                ><span class="fas fa-star size20" style="color: gold" v-if="getProductWithId(productID).rate>1"
                  ><span class="fas fa-star size20" style="color: gold" v-if="getProductWithId(productID).rate>2"
                    ><span class="fas fa-star size20" style="color: gold" v-if="getProductWithId(productID).rate>3"
                      ><span class="fas fa-star size20" style="color: gold" v-if="getProductWithId(productID).rate>4"> 
                      </span></span></span></span
              ></span>
            </div>
            <hr />
          </div>
          <div class="row p0 m0">
            <div class="col-lg-5 p0 m0">
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-sm"
                    style="background: white; border: 0px"
                    >Adet
                  </span>
                </div>
                <div class="number-wrapper">
                  <input
                    name="ctl00$ContentPlaceHolder1$adetsayi"
                    maxlength="3"
                    id="ctl00_ContentPlaceHolder1_adetsayi"
                    class="form-control"
                    type="number"
                    value="1"
                    onkeydown="return (!(event.keyCode>=65 &amp;&amp; event.keyCode<=90 ) &amp;&amp; event.keyCode!=32);"
                    style="width: 58px"
                    v-model="count"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-lg-7 p0 m0 urunstok-durum"
              style="line-height: 1.3em"
            >
              <small class="size10 text-muted"
                >Ürün Kodu: {{ getProductWithId(productID).code }}
              </small>
              <br />

              <div id="ctl00_ContentPlaceHolder1_PnlStoktaVar">
                <small class="size10"
                  >Stok Durumu:
                  <span class="yaziyesil font-weight-bold">{{
                    getProductWithId(productID).inStock > 0
                      ? 'Mevcut'
                      : 'Stokta Yok'
                  }}</span></small
                >
              </div>
            </div>
          </div>
          <hr style="border: 0.5px solid #ddd; width: 100%" />
          <div class="row">
            <div
              class="col-lg-11"
              style="line-height: 1em; color: #7b7b7b; font-size: 20px"
            >
              <small
                ><i class="text-muted detay-kargo"
                  >En geç
                  <span id="ctl00_ContentPlaceHolder1_lbl_tarih"
                    >{{ dt.format('DD-MM-YYYY dddd') }} günü</span
                  >
                  Kargoya verilir
                </i></small
              >
            </div>
          </div>
          <div class="row pt-1 mt-4 p0 m0 py-4" style="background: #f0f7f3">
            <div class="col-lg-6">
              <br />
              <h2 class="Helvatica font-weight-bold urun-fiyat-kdv">
                {{ formatPrice(getProductWithId(productID).price) }} TL
                <img
                  src="https://kavlak.com.tr/img/kdvdahil.png"
                  class="img-fluid"
                />
              </h2>
            </div>
            <div
              class="col-lg-4 mobilkazanc pt-4 text-right"
              style="margin-top: -15px"
            >
              <br />
            </div>

            <div class="col-lg-2 text-right m0 p0 mr-auto d-block indirimtext">
              <div class="pr-2 pl-3 konusma-balonu" style="margin-right: -10px">
                <span class="h5 font-weight-bold textyuzde pr-3"
                  >%{{ getProductWithId(productID).indirim }}</span
                >
                <h6 class="text-indririm pr-3" style="margin-top: -5px">
                  indirimli
                </h6>
              </div>
            </div>

            <div class="col-lg-12 p0 m0 pt-1" id="hemen-al">
              <div id="ctl00_ContentPlaceHolder1_PnlStoktaVar_ButonIcin">
                <input
                  type="submit"
                  name="ctl00$ContentPlaceHolder1$Button3"
                  value="Hemen AL"
                  id="ctl00_ContentPlaceHolder1_Button3"
                  class="btn02A54A btn-al urunBtnHAl"
                />
                <input
                  type="submit"
                  name="ctl00$ContentPlaceHolder1$Button1"
                  value="Sepete Ekle"
                  id="ctl00_ContentPlaceHolder1_Button1"
                  class="btn-sepeteEkle urunBtnSEkle"
                  @click="AddToBasket()"
                />
                <a
                  ><input
                    type="image"
                    name="ctl00$ContentPlaceHolder1$ImgBtnFavorimeEkle"
                    id="ctl00_ContentPlaceHolder1_ImgBtnFavorimeEkle"
                    src="https://kavlak.com.tr/images/iconkalp.png"
                    class="iconbtn"
                    style="border-width: 0px"
                /></a>
              </div>
            </div>
          </div>
          <div class="row pt-3 pb-5">
            <div class="col-lg-12" id="urundetayimg">
              <a href="#">
                <img
                  src="https://kavlak.com.tr/img/ucretsizkargo.png"
                  class="img-fluid border-right pr-3"
                  width="90"
              /></a>
              <a href="#">
                <img
                  src="https://kavlak.com.tr/img/kapidaodeme.png"
                  class="img-fluid border-right pr-3"
                  width="90"
              /></a>

              <a
                href="https://api.whatsapp.com/send?text=< Ürün Adı: Kavlak Taş Baskı Zeytinyağı 3lü Özel Fiyatlı Kampanya, Stok Kodu:460,Ürün Fiyatı:599,9000 TL > Merhaba, sipariş vermek istiyorum! &amp;phone=905308606880"
                target="_blank"
              >
                <img
                  src="https://kavlak.com.tr/img/watsapp-sipa.png"
                  class="img-fluid pr-3"
                  id="watsapresimsiparis"
                />
                <i class="fab fa-whatsapp yaziyesil" id="watsapmobile"></i>
              </a>
            </div>
          </div>
        </div>
        <BenzerUrunlerPaneli />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import BenzerUrunlerPaneli from '@/components/product-page/BenzerUrunlerPaneli'
import moment from 'moment'
export default {
  components: {
    BenzerUrunlerPaneli,
  },
  props: {
    productID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imageIndex: 0,
      dt: moment(moment(), 'YYYY-MM-DD HH:mm:ss'),
      count: 1,
    }
  },
  mounted() {
    this.dt.add(1, 'days')
  },
  computed: {
    ...mapGetters({
      getProductWithId: 'getProductWithId',
      getCategoryWithId: 'getCategoryWithId',
      formatPrice: 'formatPrice',
    }),
  },
  methods: {
    ...mapActions({
      sepeteEkle: 'sepeteEkle',
    }),
    AddToBasket() {
      var pid = this.productID
      var count = this.count
      this.sepeteEkle({ pid, count })
    },
  },
}
</script>
<style scoped src="@/assets/styles/urun-detay.css">
</style>