<template>
  <div>
    <div >
      <div id="ctl00_ContentPlaceHolder1_PnlSepetBos" v-if="inCartLength < 1||productLength < 1">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-12 mt-1 pt-1 card pb-2"
              style="border-bottom: 3px solid #02a54a"
            >
              <div class="kupon">
                <h3 class="mt-4 text-center">
                  Sepetinizde herhangi bir ürün bulunmamaktadır.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ctl00_ContentPlaceHolder1_PnlSepetDolu" v-else>
        <section class="section-content">
          <div class="deneme" v-if="!inCart">
            <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
              alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
            />
          </div>
          <div class="container pb-5" v-else>
            <div class="row py-5" id="Odeme-ilerleme">
              <div class="col-lg-3"></div>
              <div class="col-lg-6">
                <span class="sepetilerlemehr"></span>
                <div class="text-center mx-auto">
                  <span class="float-right">
                    <i class="fas fa-check sepetilerleme fa-2x text-white"></i>
                    <br />
                    <span class="font-weight-bold">Onay</span>
                  </span>
                  <span class="float-left">
                    <i
                      class="fas fa-shopping-cart text-white fa-2x sepetilerleme aktif"
                    ></i>
                    <br />
                    <span class="font-weight-bold">Sepet</span>
                  </span>
                  <span class="">
                    <i
                      class="fas fa-credit-card sepetilerleme fa-2x text-white"
                    ></i>
                    <br />
                    <span class="font-weight-bold">Ödeme</span>
                  </span>
                </div>
              </div>
              <div class="col-lg-3"></div>
            </div>
            <div class="row">
              <!-- row -->
              <div class="col-md-9">
                <div id="ctl00_ContentPlaceHolder1_pnlSepeteOzelIndirimBaslik">
                  <h1
                    class="font-weight-bold spr1textmobil d-none d-sm-block size25"
                    style="color: red !important"
                  >
                    Sürpriz !!! Sepetinize Özel İndirim Yakaladın!
                  </h1>
                  <h5
                    class="font-weight-bold spr1textmobil d-none d-sm-block"
                    style="border-bottom: 5px solid yellow"
                  >
                    Aşağıdaki Ürünlerden Dilediğiniz Kadar Ürünü
                    <span style="color: red !important">İndirimli</span> Olarak
                    Satın Alabilirsiniz…
                  </h5>
                  <span class="clearfix"></span>
                </div>
              </div>

              <div class="col-md-3"></div>
              <main class="col-lg-9 p0 m0" id="mainsprz">
                <!-- SepetteIndirimliler -->
                <SepetteIndirimliler />
                <div id="ctl00_ContentPlaceHolder1_panelsepet">
                  <div class="col-lg-12 card">
                    <!-- Ürün Bir -->
                    <SepetProductButton
                      :cartID="item.id"
                      v-for="item in inCart"
                      :key="item.id"
                    />
                  </div>
                </div>
                <!-- Mobil Slider  DİKKAT(SADECE MOBİLDE GOZUKECEKTİR !!!!) -->
                <div class="col-lg-12 mt-4" id="MobileSliderHidden">
                  <!-- card2.// -->
                  <div class="text-center">
                    <h5 class="font-weight-bold" style="color: red !important">
                      Sürpriz !!! Sepetinize Özel İndirim Yakaladınız!
                    </h5>
                    <b class="">
                      Aşağıdaki Ürünlerden Dilediğiniz Kadar Ürünü
                      <span style="color: red !important">İndirimli</span>
                      Olarak Satın Alabilirsiniz…
                    </b>
                  </div>
                  <!--Carousel Wrapper-->
                  <div
                    id="carousel-with-lb"
                    class="carousel slide carousel-multi-item"
                    data-ride="carousel"
                  >
                    <!--Indicators-->
                    <ol class="carousel-indicators">
                      <li
                        data-target="#carousel-with-lb"
                        data-slide-to="0"
                        class="active success-color"
                      ></li>
                      <li
                        data-target="#carousel-with-lb"
                        data-slide-to="1"
                        class="success-color"
                      ></li>
                      <li
                        data-target="#carousel-with-lb"
                        data-slide-to="2"
                        class="success-color"
                      ></li>
                    </ol>
                    <!--/.Indicators-->
                    <!--Slides and lightbox-->
                    <div class="carousel-inner">
                      <div id="mdb-lightbox-ui"></div>
                      <!--First slide-->
                      <div class="carousel-item text-center active">
                        <figure
                          class="col-lg-12 col-sm-12 col-xs-12 d-md-inline-block mt-2"
                          style="border: 1px solid #ddd; width: 100%"
                        >
                          <a id="">
                            <img
                              src="https://kavlak.com.tr/images/Kavlak/evyapimi/evyapimi1.jpg"
                              class="img-fluid"
                              width="180"
                            />
                          </a>
                          <div style="height: 70px">
                            <div class="mh-100">
                              <a
                                class="font-weight-bold text-muted size14"
                                id="cardtitlbaslik"
                              >
                                <small
                                  id="cardtitlbaslik"
                                  class="card-title size12 text-muted"
                                  style="line-height: 1em"
                                  >Ev Yapımı Tarhana (KIRMIZI) 400 Gr</small
                                >
                              </a>
                            </div>
                          </div>
                          <h6
                            id="fiyatsagslider"
                            class="card-title h5 font-weight-bold text-muted"
                            style="line-height: 1em"
                          >
                            14.90 tl
                          </h6>
                          <a
                            class="badge float-left"
                            style="
                              position: static;
                              margin-left: -18px;
                              background: red;
                              z-index: 9999;
                            "
                            >Sadece</a
                          >
                          <br />
                          <a id="btnsepeteekle" class="mx-auto d-block">
                            <input
                              type="image"
                              name="ctl00$ContentPlaceHolder1$ImageButton5"
                              id="ctl00_ContentPlaceHolder1_ImageButton5"
                              class="img-fluid pb-3"
                              src="/img/button/sepeteekle.png"
                              style="
                                width: 110px;
                                border-width: 0px;
                                position: static;
                              "
                            />
                          </a>
                        </figure>
                      </div>
                      <!--/.First slide-->
                      <!--two slide-->
                      <div class="carousel-item text-center">
                        <figure
                          class="col-lg-12 col-sm-12 col-xs-12 d-md-inline-block mt-2"
                          style="border: 1px solid #ddd; width: 100%"
                        >
                          <a
                            ><img
                              src="https://kavlak.com.tr/images/Kavlak/evyapimi/evyapimi2.jpg"
                              class="img-fluid"
                              width="180"
                          /></a>
                          <div style="height: 70px">
                            <div class="mh-100">
                              <a
                                class="font-weight-bold text-muted size14"
                                id="cardtitlbaslik"
                              >
                                <small
                                  id="cardtitlbaslik"
                                  class="card-title size12 text-muted"
                                  style="line-height: 1em"
                                  >Kavlak Ev Yapımı Düğün Çorbası</small
                                >
                              </a>
                            </div>
                          </div>
                          <h6
                            id="fiyatsagslider"
                            class="card-title h5 font-weight-bold text-muted"
                            style="line-height: 1em"
                          >
                            14.90 tl
                          </h6>
                          <a
                            class="badge float-left"
                            style="
                              position: static;
                              margin-left: -18px;
                              background: red;
                              z-index: 9999;
                            "
                            >Sadece</a
                          >
                          <br /><a id="btnsepeteekle" class="mx-auto d-block">
                            <input
                              type="image"
                              name="ctl00$ContentPlaceHolder1$ImageButton6"
                              id="ctl00_ContentPlaceHolder1_ImageButton6"
                              class="img-fluid pb-3"
                              src="/img/button/sepeteekle.png"
                              style="
                                width: 110px;
                                border-width: 0px;
                                position: static;
                              "
                            />
                          </a>
                        </figure>
                      </div>
                      <!--/.tree slide-->
                      <!--tree slide-->
                      <div class="carousel-item text-center">
                        <figure
                          class="col-lg-12 col-sm-12 col-xs-12 d-md-inline-block mt-2"
                          style="border: 1px solid #ddd; width: 100%"
                        >
                          <a id=""
                            ><img
                              src="https://kavlak.com.tr/images/Kavlak/evyapimi/evyapimi4.jpg"
                              class="img-fluid"
                              width="180"
                          /></a>
                          <div style="height: 70px">
                            <div class="mh-100">
                              <a
                                class="font-weight-bold text-muted size14"
                                id="cardtitlbaslik"
                              >
                                <small
                                  id="cardtitlbaslik"
                                  class="card-title size12 text-muted"
                                  style="line-height: 1em"
                                  >Kavlak Ev Yapımı Üçgen Makarna</small
                                >
                              </a>
                            </div>
                          </div>
                          <h6
                            id="fiyatsagslider"
                            class="card-title h5 font-weight-bold text-muted"
                            style="line-height: 1em"
                          >
                            14.90 tl
                          </h6>
                          <a
                            class="badge float-left"
                            style="
                              position: static;
                              margin-left: -18px;
                              background: red;
                              z-index: 9999;
                            "
                            >Sadece</a
                          >
                          <br /><a id="btnsepeteekle" class="mx-auto d-block">
                            <input
                              type="image"
                              name="ctl00$ContentPlaceHolder1$ImageButton8"
                              id="ctl00_ContentPlaceHolder1_ImageButton8"
                              class="img-fluid pb-3"
                              src="/img/button/sepeteekle.png"
                              style="
                                width: 110px;
                                border-width: 0px;
                                position: static;
                              "
                            />
                          </a>
                        </figure>
                      </div>
                      <!--/.tree slide-->
                    </div>
                    <!--/.Slides-->
                  </div>
                  <!--/.Carousel Wrapper-->
                </div>
                <!-- card2.// -->
                <!-- Mobil Slider //-->

                <div id="ctl00_ContentPlaceHolder1_PnlMesaj">
                  <div
                    class="col-lg-12 mt-1 pt-1 card pb-2"
                    style="border-bottom: 3px solid #02a54a"
                  >
                    <div class="kupon">
                      <h3 class="mt-4">
                        <i class="fas fa-envelope pr-2"></i>Mesajınız:
                      </h3>
                    </div>
                  </div>
                  <div class="col-lg-12 card py-2">
                    <input
                      name="ctl00$ContentPlaceHolder1$TxtMesaj"
                      type="text"
                      maxlength="200"
                      id="ctl00_ContentPlaceHolder1_TxtMesaj"
                      class="form-control p-2 pt-1 w-100 py-4"
                      placeholder="Siparişiniz ile alakalı iletmek istediğiniz mesajı yazabilirsiniz"
                    />
                  </div>
                </div>
              </main>
              <!-- col.// -->
              <!-- ÖDEMEYE GEÇ EKRANI-->
              <div class="col-lg-3 pt-2">
                <!--col 2-->
                <div class="solda-fixed-odeme">
                  <div class="card p-1">
                    <span class="pl-1" id="">
                      <i class="fas fa-bars size25 pt-1 pl-2 yaziyesil"></i>
                      <strong class="h4 font-weight-bold">Sipariş Özeti</strong>
                    </span>
                    <hr
                      style="width: 100%; border: 2px solid green"
                      class="clearfix"
                    />
                    <dl class="dlist-align">
                      <dt class="h5 font-weight-bold">
                        Toplam {{ getCartTotalCount() }}Ürün
                      </dt>
                    </dl>
                    <dl class="dlist-align m0 p0 HelvaticaRegular">
                      <dt class="float-left m0 p0">Ürün Toplamı:</dt>
                      <dd class="text-right size18 m0 p0">
                        {{ formatPrice(getCartTotalCost()) }} TL
                      </dd>
                    </dl>

                    <dl class="dlist-align m0 p0">
                      <dt class="float-left">Kargo Ücreti:</dt>
                      <dd class="text-right size18 m0 p0">0 TL</dd>
                    </dl>
                    <dl class="dlist-align m0 p0">
                      <dt class="float-left m0 p0">Kupon İndirim:</dt>
                      <dd class="text-right size18">0 TL</dd>
                    </dl>
                    <hr />
                    <dl class="dlist-align h5">
                      <dt class="float-left">Toplam:</dt>
                      <dd class="text-right">
                        <strong>
                          {{ formatPrice(getCartTotalCost()) }}TL
                        </strong>
                      </dd>
                    </dl>
                    <hr />

                    <hr />
                    <div id="ctl00_ContentPlaceHolder1_pnl_adres_secilmedi">
                      <div class="">
                        <div class="col-lg-12 float-left">
                          <!--3/col-lg-4 Başla-->
                          <div class="pb-2">
                            <div class="chiller_cb">
                              <input type="checkbox" id="cboxItem" />
                              <label
                                for="xdeee"
                                class="HelvaticaRegular size20"
                                style="line-height: 1.5em"
                              >
                                Adres seçilmedi
                              </label>
                              <span></span>
                            </div>
                          </div>
                        </div>
                        <!--3/col-lg-4 Bitiş-->
                      </div>
                    </div>
                    <!-- <style type="text/css">
                      @media only screen and (max-width: 992px) {
                        #fixedbutonodeme .btn-mobilitem {
                          display: block !important;
                          width: 100% !important;
                          height: 65px;
                          background: red;
                          stroke-width: 445%;
                        }
                      }
                    </style> -->
                    <div id="fixedbutonodeme">
                      <input
                        type="submit"
                        name="ctl00$ContentPlaceHolder1$BtnOdemeyeGecButonu1"
                        value="Ödemeye Geç"
                        id="ctl00_ContentPlaceHolder1_BtnOdemeyeGecButonu1"
                        class="btn02A54A font-weight-bold w-100 size16 pt-2 pb-2 p0 text-white odemeDesck"
                        style="border-radius: 10px"
                      />
                      <a>
                        <input
                          type="submit"
                          name="ctl00$ContentPlaceHolder1$BtnOdemeyeGecButonu2"
                          value="Ödemeye Geç"
                          id="ctl00_ContentPlaceHolder1_BtnOdemeyeGecButonu2"
                          class="btn-mobilitem fixed-bottom btn02A54A font-weight-bold w-100 size16 pt-2 pb-2 p0 text-white odemeDesck"
                          style="border-radius: 10px"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- row.// -->
          </div>
          <!-- container .//  -->
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import SepetteIndirimliler from './SepetteIndirimliler'
import SepetProductButton from './SepetProductButton'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: {
    SepetteIndirimliler,
    SepetProductButton,
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      fetchCartItems: 'fetchCartItems',
    }),
  },
  computed: {
    ...mapState({
      inCart: (state) => state.inCart,
      products: (state) => state.products,
    }),
    ...mapGetters({
      getCartTotalCost: 'getCartTotalCost',
      formatPrice: 'formatPrice',
      getCartTotalCount: 'getCartTotalCount',
    }),
    productLength() {
      return this.products != null ? this.products.length : -1
    },
    inCartLength(){
      return this.inCart? this.inCart.length :-1
    }
  },
}
</script>