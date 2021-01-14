<template>
  <section style="z-index: 2">
    <nav
      class="navbar navbar-expand-lg sidebarNavigation navback"
      data-sidebarclass="navbar-dark bg-dark"
    >
      <div class="container-fluid m0 p0">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu-content"
          aria-expanded="true"
          aria-label="Toggle navigation"
          style="z-index: 11"
        >
          <i class="fas fa-bars text-dark"> Kategoriler</i>
        </button>
        <div class="navbar-collapse show" id="KavlakMenu" style="display: none">
          <!--MOBİL İLE İLGİLİ NAV -->
          <div class="nav-side-menu MiniMobilMnu">
            <!-- NAVBAR-->
            <div class="menu-list">
              <ul class="menu-content collapse" id="menu-content">
                <li data-toggle="collapse" class="collapsed py-3">
                  <a href="/">
                    <img
                      src="https://kavlak.com.tr/img/logo/kavlaklogo.png"
                      width="100"
                      class="img-fluid pl-2 mx-auto d-block"
                  /></a>
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#zeytin"
                  class="collapsed py-2"
                >
                  <a class="py-2">
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/zeytin.png"
                      width="32"
                      class="img-fluid pl-2" />
                    Zeytin <span class="arrow"></span></a
                  >&nbsp;&nbsp;
                </li>
                <ul class="sub-menu collapse" id="zeytin">
                  <a href="/siyahzeytin" class="text-white">
                    <li class="py-2">Siyah Zeytin</li>
                  </a>
                  <a href="/yesilzeytin" class="text-white">
                    <li class="py-2">Yeşil Zeytin</li>
                  </a>
                </ul>
                <li>
                  <a href="/zeytinyagi">
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/zeytin-yagi.png"
                      width="32"
                      class="pl-2 py-3"
                    />
                    Zeytinyağı</a
                  >&nbsp;&nbsp;
                </li>
                <li
                  data-toggle="collapse"
                  data-target="#sarkuteri"
                  class="collapsed py-2"
                >
                  <a>
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/peynir.png"
                      width="32"
                      class="img-fluid pl-2" />Şarküteri<span
                      class="arrow"
                    ></span></a
                  >&nbsp;&nbsp;
                </li>
                <ul class="sub-menu collapse" id="sarkuteri">
                  <a href="/peynir" class="text-white">
                    <li class="py-2">Peynir</li>
                  </a>
                  <a href="/recel" class="text-white">
                    <li class="py-2">Reçel</li>
                  </a>
                  <a href="/icecek" class="text-white">
                    <li class="py-2">İçecek</li>
                  </a>
                  <a href="/diger" class="text-white">
                    <li class="py-2">Diğer</li>
                  </a>
                </ul>
                <a href="/tursular" class="text-white">
                  <li>
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/tursu.png"
                      width="32"
                      class="pl-2 py-3"
                    />Turşular &nbsp;&nbsp;
                  </li>
                </a>
                <a href="/kozmetik" class="text-white">
                  <li>
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/kozmetik.png"
                      width="32"
                      class="pl-2 py-3"
                    />Kozmetik&nbsp;&nbsp;
                  </li>
                </a>
                <a href="/kuruyemis" class="text-white">
                  <li>
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/kuruyemis.png"
                      width="32"
                      class="pl-2 py-3"
                    />Kuruyemiş&nbsp;&nbsp;
                  </li>
                </a>
                <a href="/ev-yapimi" class="text-white">
                  <li>
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/Evyapimi.png"
                      width="32"
                      class="pl-2 py-3"
                    />Ev Yapımı&nbsp;&nbsp;
                  </li>
                </a>
                <li
                  data-toggle="collapse"
                  data-target="#seker2"
                  class="collapsed py-2"
                >
                  <a>
                    <img
                      src="https://kavlak.com.tr/img/minimenu-ico/peynir.png"
                      width="32"
                      class="pl-2" />Şekerleme<span class="arrow"></span></a
                  >&nbsp;&nbsp;
                </li>
                <ul class="sub-menu collapse" id="seker2">
                  <a class="text-white" href="/tatlilar">
                    <li class="py-2">Lokum</li>
                  </a>
                  <a class="text-white" href="/tatlilar">
                    <li class="py-2">Kestane Şekeri</li>
                  </a>
                </ul>
                <li
                  data-toggle="collapse"
                  data-target="#kurumsal"
                  class="collapsed py-2"
                >
                  <a href="#"
                    ><i
                      class="far fa-building pl-2 size20"
                      style="color: #dcdcdc"
                    ></i
                    >Kurumsal<span class="arrow"></span
                  ></a>
                </li>
                <ul class="sub-menu collapse" id="kurumsal">
                  <a class="text-white" href="/hakkimizda">
                    <li class="py-2 text-white">Hakkımızda</li>
                  </a>
                  <a class="text-white" href="/magazalarimiz">
                    <li class="py-2">Mağazalarımız</li>
                  </a>
                  <a class="text-white" href="/iletisim">
                    <li class="py-2 text-white">İletişim</li>
                  </a>
                </ul>
              </ul>
              <!--EK NAVBAR-->
            </div>
          </div>
          <!--MOBİL İLE İLGİLİ NAV -->
          <ul
            class="nav navbar-nav nav-flex-icons mx-auto text-center"
            v-if="categoriesBarItems"
          >
            <!--MY NAVBAR -->
            <!--Zeytin-->
            <li
              class="nav-item dropdown p0 m0"
              :id="'navedit' + item.name"
              v-for="(item,index) in categoriesBarItems"
              :key="item.id"
                @mouseenter="OpenDropdown($event,index)"
                @mouseleave="CloseDropdown"
            >
              <a
                class="nav-link"
                id="zeytindropdown"
                :class="{ 'dropdown-toggle': item.subCategories }"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div class="row">
                  <div class="col-lg-3">
                    <img
                      :src="item.icon"
                      id="zeytinhidden"
                      class="d-none d-md-inline-block"
                    />
                  </div>
                  <div class="col-lg-8 pt-4 m0">
                    <span
                      class="clearfix HelvaticaRegular text-dark font-weight-bold size16 d-none d-sm-block"
                      >&nbsp;&nbsp;{{ item.name }}&nbsp;&nbsp;</span
                    >
                  </div>
                </div>
              </a>
              <!--DESK RESPO. -->
              <div
                v-if="item.subCategories"
                :class="{ 'show': index==mouseOveredIndex }"
                class="dropdown-menu dropdown-menu-right myitems"
                aria-labelledby="zeytindropdown"
              >
                <a
                  class="dropdown-item font-weight-bold text-white"
                  :href="'/' + getCategoryWithId(sub.id).name"
                  v-for="sub in item.subCategories"
                  :key="sub.id"
                  >{{ getCategoryWithId(sub.id).name }}</a
                >
              </div>
            </li>
            <!--Zeytin-->
            <!--Zeytinyağı--><!-- 
            <li
              class="nav-item dropdown dropdown-animating"
              id="naveditzeytinyagi"
            >
              <a
                class="nav-link dropdown-toggle text-dark"
                href="/zeytinyagi"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div class="row">
                  <div class="col-lg-3 mr-auto d-block">
                    <img
                      src="https://kavlak.com.tr/img/icon/zeytinyagii.png"
                      class="d-none d-sm-inline-block"
                      style="height: 55px"
                      id="zeytinyagihidden"
                    />
                  </div>
                  <div class="col-lg-8 text-left pt-4">
                    <span
                      class="clearfix HelvaticaRegular text-dark font-weight-bold size16 d-none d-md-block"
                      >Zeytinyağı&nbsp;&nbsp;</span
                    >
                  </div>
                </div>
              </a>
            </li> -->
            <!--Zeytinyağı-->
          </ul>
          <!--MY NAVBAR -->
        </div>
      </div>
    </nav>
  </section>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data(){
    return{
      mouseOveredIndex:-1
    }
  },
  methods: {
    ...mapActions({
      fetchCategoriesBarItems: 'fetchCategoriesBarItems',
    }),
    OpenDropdown(event,index) {
      var Target = event.target
      Target.classList.add('show')
      this.mouseOveredIndex=index
    },
    CloseDropdown(event) {
      var Target = event.target
      Target.classList.remove('show')
      this.mouseOveredIndex=-1
    },
    parentContainsShow(event) {
      var Target = event.target
      console.log(Target.parentElement.classList)
      return Target.parentElement.classList.contains('show')==true
    },
  },
  created() {
    this.fetchCategoriesBarItems()
  },
  computed: {
    ...mapState({
      categoriesBarItems: (state) => state.categoriesBarItems,
    }),
    ...mapGetters({
      getCategoryWithId: 'getCategoryWithId',
    }),
  },
}
</script>