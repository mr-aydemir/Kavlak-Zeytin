<template>
  <div>
    <section
      class="hritem d-none d-sm-block mx-auto d-block"
      style="max-width: 2567px; margin-top: 15px"
    ></section>
    <div class="container" style="margin-top: -60px; position: relative">
      <!--DEK. İTEM -->
      <div class="row" style="z-index: -122">
        <div
          class="col-lg-12 mt-5 text-center HelvaticaRegular size16 minibardesk"
        >
          <span class="border-right pr-3 minibar"
            ><a href="/kampanyalar">Kampanyalar</a></span
          >
          <span class="border-right pl-3 pr-3 minibar"
            ><a href="/coksatanlar">Çok Satanlar</a></span
          >
          <span class="border-right pl-3 pr-3 minibar"
            ><a href="firsaturunleri">Fırsat Ürünleri</a></span
          >
          <span class="pl-3 pr-3 minibar"
            ><a href="/yeniurunler">Yeni Ürünler</a></span
          >
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <!--Mobile-->
      <div class="row pt-4">
        <div class="col-xs-12 col-sm-12 minibarmobil pt-1">
          <!--MOBİL DROPDOWN LİST -->
          <select
            class="browser-default custom-select"
            onchange="window.location.href=this.value;"
          >
            <option disabled="" selected="">Seçiniz</option>
            <option value="/kampanyalar">Kampanyalar</option>
            <option value="/coksatanlar">Çok Satanlar</option>
            <option value="/firsaturunleri">Fırsat Ürünleri</option>
            <option value="/yeniurunler">Yeni Ürünleri</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>