<template>
  <div class="container-fluid Headercontainer mx-auto" id="BasaDon">
    <!--Container-fluid-->
    <div class="row">
      <!--ROW-->
      <div
        class="col-lg-6 col-md-12 col-sm-12 col-xs-12 IndexSolUstAfis text-white pt-2"
        style="
          background-image: url('https://kavlak.com.tr/img/background/headback.png');
          background-repeat: no-repeat;
        "
      >
        <!--50 ₺ veÜzeri -->
        <span class="famil size20 ml-3"
          >150 TL ve Üzeri <b class="h2 Helvatica">KARGO BEDAVA !</b></span
        >
      </div>
      <!--50 ₺veÜzeri -->
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p0 m0">
        <!--SEARCH-->
        <div class="row">
          <div class="col-lg-5"></div>
          <div class="col-lg-7 pr-5 searchcol" id="mobilaramakaldir">
            <div class="input-group md-form form-sm form-2">
              <input
                name="ctl00$txt_arama"
                type="text"
                maxlength="20"
                id="ctl00_txt_arama"
                class="form-control my-0 py-1 border rounded searchgrey searchinput"
                placeholder="Ürünlerde Ara"
                aria-label="Search"
              />
              <div class="input-group-append">
                <input
                  type="image"
                  name="ctl00$Button1"
                  id="ctl00_Button1"
                  class="input-group-text yesil lighten-2 ml-2 rounded fas fa-search text-white"
                  alt="Arama"
                  src="https://kavlak.com.tr/images/header/buyutec.png"
                  style="border-width: 0px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--SEARCH-->
      <div class="col-lg-6">
        <!--50 ₺ veÜzeri -->
        <div class="row">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-10 gsmsolL">
                <a href="tel://4446880">
                  <img
                    src="https://kavlak.com.tr/img/4446880.png"
                    class="img-fluid w-100 py-2"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--50 ₺veÜzeri -->
      <div class="col-lg-6">
        <div class="mobilsearchalaniveresim">
          <center>
            <a href="/"
              ><img
                src="https://kavlak.com.tr/img/logo/kavlaklogo.png"
                class="img-fluid"
                style="width: 200px"
            /></a>
          </center>
          <div class="input-group md-form form-sm form-2">
            <input
              name="ctl00$txt_arama_mobil"
              type="text"
              maxlength="20"
              id="ctl00_txt_arama_mobil"
              class="form-control my-0 py-1 pl-1 border rounded searchgrey searchinput"
              placeholder="Ürünlerde Ara"
              aria-label="Search"
            />
            <div class="input-group-append">
              <input
                type="image"
                name="ctl00$ImageButton1"
                id="ctl00_ImageButton1"
                class="input-group-text yesil lighten-2 ml-2 rounded fas fa-search text-white"
                alt="Arama"
                src="https://kavlak.com.tr/images/header/buyutec.png"
                style="border-width: 0px"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mobilkaldir pt-2">
        <nav
          class="navbar navbar-expand-lg"
          style="border: 0px; box-shadow: 0 0 0 0"
        >
          <!-- Navbar links -->
          <ul class="nav navbar-nav nav-flex-icons mr-auto">
            <!-- Sepet -->
            <li class="nav-item dropdown" id="dp" style="z-index: 997">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span class="clearfix text-dark Helvatica pl-3 h5"
                  >Kurumsal</span
                >
              </a>
              <div
                class="dropdown-menu dropdown-menu-left arrow_kurumsal pl-3 pr-3"
                aria-labelledby="userDropdown"
                style="width: 252px"
              >
                <div class="row">
                  <!--Siparişlerim-->
                  <div class="col-lg-12 py-3 border-bottom">
                    <div class="float-left pl-2">
                      <i class="fas fa-question text-muted"></i>
                    </div>
                    <div class="text-left pr-3">
                      <a href="/hakkimizda">Hakkımızda</a>
                    </div>
                  </div>
                  <!--Siparişlerim-->
                  <!--Mesajlarım-->
                  <div class="col-lg-12 pt-3 pb-2 border-bottom">
                    <div class="float-left pl-2">
                      <i class="fas fa-comments"></i>
                    </div>
                    <div class="text-left pr-3 pt-1 pb-1">
                      <a href="/magazalarimiz">Mağazalarımız</a>
                    </div>
                  </div>
                  <!--Mesajlarım-->
                  <!--Mesajlarım-->
                  <div class="col-lg-12 pt-3">
                    <div class="float-left pl-2">
                      <i class="fas fa-comments"></i>
                    </div>
                    <div class="text-left pr-3 pt-1 pb-1">
                      <a href="/iletisim">İletişim</a>
                    </div>
                  </div>
                  <!--Mesajlarım-->
                </div>
              </div>
            </li>
            <!-- Sepet -->
          </ul>
          <!-- Navbar links -->
        </nav>
      </div>
      <div class="col-lg-6 minimenu p0 m0 pt-2">
        <!-- ÜYE DEĞİL-->
        <div id="ctl00_PanelUyeDegil">
          <nav
            class="navbar navbar-expand-lg"
            id="kucukmenutopborder"
            style="box-shadow: 0 0 0 0"
          >
            <!-- Navbar links -->
            <ul class="nav navbar-nav nav-flex-icons ml-auto solmenusett">
              <!-- Hesabım -->
              <li
                id="navbar-static-tools"
                class="nav-item dropdown"
                :class="{ show: openDropdown }"
                @click="openDropdown = !openDropdown"
                @blur="openDropdown = false"
                v-show="isLoggedIn"
              >
                <a
                  class="nav-link"
                  id="navbar-tools"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <span class="text-dark">Hesabım</span>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  :class="{ show: openDropdown }"
                  aria-labelledby="navbar-tools"
                  style="width: 190px; padding: 0px"
                >
                  <div class="list-group">
                    <a id="ctl00_lnk_uye_girisi">Sn. {{ user.displayName }}</a>
                    <a id="ctl00_lnk_uye_girisi">id. {{ user.uid }}</a>
                    <a
                      href="/hesabim"
                      class="list-group-item list-group-item-action"
                      >Bilgilerimi Güncelle</a
                    >
                    <a
                      href="/siparislerim"
                      class="list-group-item list-group-item-action"
                      >Siparişlerim</a
                    >
                    <a
                      href="/favorilerim"
                      class="list-group-item list-group-item-action"
                      >Favorilerim</a
                    >
                    <div
                      @click="logout"
                      class="list-group-item list-group-item-action"
                    >
                      Çıkış
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="nav-item p0 m0"
                style="z-index: 997"
                v-show="!isLoggedIn"
              >
                <!-- Giriş yap / Üye Ol -->
                <nuxt-link
                  :to="{
                    name: 'kayit-ol',
                  }"
                  class="nav-link pr-3"
                  ><i class="fas fa-user-plus size23 Sepeticon yaziyesil"></i>
                  <span
                    class="clearfix d-none d-md-inline-block d-sm-inline-block size18 HelvaticaRegular Gizle_UyeOL"
                  >
                    <small>
                      <font color="black">Üye Ol</font>
                    </small>
                  </span>
                </nuxt-link>
              </li>
              <!-- Dropdown -->
              <li
                class="nav-item p0 m0"
                style="z-index: 997"
                v-show="!isLoggedIn"
              >
                <!-- Giriş yap / Üye Ol -->
                <nuxt-link
                  :to="{
                    name: 'Giris-Uye',
                  }"
                  class="nav-link pr-3"
                  ><i class="fas fa-user size23 Sepeticon yaziyesil"></i>
                  <span
                    class="clearfix d-none d-md-inline-block d-sm-inline-block size18 HelvaticaRegular Gizle_UyeGir"
                  >
                    <small>
                      <font color="black">Giriş yap</font>
                    </small>
                  </span>
                </nuxt-link>
              </li>
              <!-- Giriş yap / Üye Ol -->

              <li class="nav-item sepetborder pr-2">
                <img
                  src="https://kavlak.com.tr/img/cibik.png"
                  class="img-fluid"
                />
              </li>
              <li class="nav-item pl-2">
                <nuxt-link
                  :to="{
                    name: 'Sepetim-Sepet',
                  }"
                  ><span
                    class="badge red mt-"
                    id="kasaurunsayisi"
                    style="z-index: 999"
                  >
                    {{ inCartLength>0?inCartLength:0 }}
                  </span></nuxt-link
                >
              </li>
              <!-- Üst taraf yerine geldi -->
              <li class="nav-item p0 m0" style="z-index: 997">
                <!-- Giriş yap / Üye Ol -->
                <nuxt-link
                  :to="{
                    name: 'Sepetim-Sepet',
                  }"
                  class="nav-link pr-3"
                  ><i
                    class="fas fa-shopping-cart size25 Sepeticon yaziyesil"
                  ></i>
                  <span
                    class="clearfix d-none d-md-inline-block size18 HelvaticaRegular Gizle_Sepetimi"
                  >
                    <small>
                      <font color="black">Sepetim</font>
                    </small>
                  </span>
                </nuxt-link>
              </li>
            </ul>
            <!-- Navbar links -->
          </nav>
        </div>
        <!-- YUKARININ YERİNE GEÇİÇ -->

        <!-- END ÜYE-->
      </div>
      <div class="col-lg-12 yesilborder">
        <div class="rounded mx-auto">
          <a href="/">
            <img
              src="https://kavlak.com.tr/img/logo/kavlaklogo.png"
              class="img-fluid logosetting"
          /></a>
        </div>
        <nuxt-link
          :to="{
            name: 'Giris-Uye',
          }"
        >
          <div class="float-left Helvatica m-1 yaziyesil h6">
            <!--Ana Sayfa-->
          </div>
          <div
            class="float-right text-white tlcover pl-5 pr-3 font-weight-bold"
          >
            <span class="h6">
              {{ inCartLength&&productLength ? formatPrice(getCartTotalCost()) : 0 }} TL</span
            >
          </div>
        </nuxt-link>
      </div>
    </div>
    <!--ROW-->
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      openDropdown: false,
      isLoggedIn: false,
      user: {},
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
        this.user = user
        user.phoneNumber
      } else this.isLoggedIn = false
    })
    //this.fetchCartItems()
  },
  methods: {
    ...mapActions({
      logout: 'logout',
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