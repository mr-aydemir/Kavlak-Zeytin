<template>
  <!-- Ürün Bir -->
  <article class="card-product border-bottom">
    <div class="card-body">
      <div class="row">
        <aside class="col-sm-3">
          <div class="img-wrap">
            <img
              id="ctl00_ContentPlaceHolder1_data_sepet_ctl00_img_urun_resim"
              class="img-thumbnail img-sm"
              :src="getProduct.images[0]"
              style="border-width: 0px"
            />
          </div>
        </aside>
        <!-- col.// -->
        <article class="col-sm-7">
          <h4 class="title text-truncate HelvaticaRegular size20">
            {{ getProduct.name }}
          </h4>
          <div class="rating-wrap mb-2">
            <p>{{ getProduct.detail }}</p>
            <div class="text-danger" @click="DeleteCartItem()">
              <i
                class="pulse far fa-trash-alt text-danger text-muted size18 pr-1 text-danger"
              ></i
              >Sil
            </div>
            <br />
            <div class="label-rating size14 float-right pt-3 font-weight-bold">
              Fatura Adresine Teslim
            </div>
          </div>
        </article>
        <!-- col.// -->
        <aside class="col-sm-2 border-left">
          <div class="action-wrap">
            <div class="action-wrap">
              <p></p>
              <div class="price size20">
                {{ cartItem.count }} Adet <br />
                {{ formatPrice(getProduct.price) }} TL
              </div>
              <p></p>
            </div>
            <!-- info-price-detail // -->
          </div>
          <!-- action-wrap.// -->
        </aside>
        <!-- col.// -->
      </div>
      <!-- row.// -->
    </div>
  </article>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    cartID: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      getProductWithId: 'getProductWithId',
      getCategoryWithId: 'getCategoryWithId',
      formatPrice: 'formatPrice',
      getCartItemWithID: 'getCartItemWithID',
    }),
    cartItem() {
      return this.getCartItemWithID(this.cartID)
    },
    getProduct() {
      return this.getProductWithId(this.cartItem.pid)
    },
  },
  methods: {
    ...mapActions({
      deleteCart: 'deleteCart',
    }),
    DeleteCartItem() {
      //this.inCart.splice(this.index, 1);
      this.deleteCart(this.cartID)
    },
  },
}
</script>