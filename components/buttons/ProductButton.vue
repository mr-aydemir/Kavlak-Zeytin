<template>
  <div class="col-lg-3 col-md-6 col-sm-6 mb-4 pt-4">
    <div
      style="height: 25px; position: absolute; z-index: 9999; margin-top: -30px"
    >
      <div>
        <p class="font-weight-bold"></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>

    <div class="container444">
      <div style="width: 190px; height: 25px; margin: 0px"></div>
      <div style="width: 190px; height: 25px; margin: 0px"></div>
    </div>

    <!--Product 1-->
    <div class="card" style="border: 0px">
      <nuxt-link
        :to="{
          name: 'productType-productID',
          params: {
            productID: productID,
            productType: getCategoryWithId(
              getProductWithId(productID).categoryID
            ).name,
          },
        }"
        id="ctl00_ContentPlaceHolder1_data_vitrin_ctl00_lnk_urun_resim"
      >
        <img
          class="card-img-top img-fluid"
          :src="getProductWithId(productID).images[0]"
          :alt="getProductWithId(productID).detail"
        />
      </nuxt-link>
      <div
        class="card-body urunfooter"
        style="padding-bottom: 0.1rem; border-radius: 0px"
      >
        <h5 class="card-title">
          <a class="text-center commantext"> </a>
          <div style="height: 85px" class="">
            <a class="text-center commantext"> </a>
            <div class="mh-100">
              <a class="text-center commantext"> </a>
              <nuxt-link
                :to="{
                  name: 'productType-productID',
                  params: {
                    productID: productID,
                    productType: getCategoryWithId(
                      getProductWithId(productID).categoryID
                    ).name,
                  },
                }"
                id="ctl00_ContentPlaceHolder1_data_vitrin_ctl00_lnk_urun_adi"
                href="ZeytinYagi/kavlak-tas-baski-zeytinyagi-3lu-ozel-fiyatli-kampanya"
                style="color: Black"
                >{{ getProductWithId(productID).name }}</nuxt-link
              >
            </div>
          </div>
        </h5>
        <div
          class="card-text cardbodytext HelvaticaRegular"
          style="height: 85px"
        >
          {{ getProductWithId(productID).detail }}
        </div>

        <div class="row">
          <div class="text-center" style="width: 33%; font-family: Calibri">
            <!--İndirim-->
          </div>
          <div class="text-muted h3 t1">
            <!--400 TL-->
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
          <div
            class="h5 text-center myred pt-2 text-white float-left py-1"
            style="width: 33%"
          >
            %{{ getProductWithId(productID).indirim }}
          </div>
          <!--  <div class="h5 text-center myred pt-2 text-white float-left py-1" style="width:33%;">
                                               %35
                                          </div>-->
          <div
            class="float-right h3 text-center mygray font-weight-bold pt-2 size22 py-1"
            style="width: 67%"
          >
            {{ formatPrice(getProductWithId(productID).price) }} TL
          </div>
        </div>
        <div class="row starx1 pl-2"></div>
      </div>
      <!--V-->
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      productType: 'zeytin',
    }
  },
  props: {
    productID: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getProductWithId: 'getProductWithId',
      getCategoryWithId: 'getCategoryWithId',
      formatPrice: 'formatPrice',
    }),
  },
}
</script>