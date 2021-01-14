<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-left pl-4">
        <h1
          class="modal-title font-weight-bold pt-5 ml-4 Helvatica text-center"
          id="logingirisyap"
        >
          <b><br /></b>
        </h1>
      </div>

      <div
        id="ctl00_ContentPlaceHolder1_Panel1"
        onkeypress="javascript:return WebForm_FireDefaultButton(event, 'ctl00_ContentPlaceHolder1_btn_uye_girisi')"
      >
        <div class="modal-body float-center pt-4" style="margin-top: -50px">
          <!--"modal-body başla-->
          <!--form  başla-->
          <div
            class="row rounded mx-auto text-center input90"
            style="z-index: 0"
          >
            <div class="input-group mb-3 mx-auto input90">
              <div class="input-group-prepend">
                <span class="input-group-text pl-3 pr-3" style="border: 0px"
                  >@</span
                >
              </div>
              <input
                name="ctl00$ContentPlaceHolder1$txt_user"
                type="text"
                id="ctl00_ContentPlaceHolder1_txt_user"
                class="form-control py-4 logininputsize"
                placeholder=" E-Posta Adresi"
                required=""
                v-model.lazy="email"
              />
            </div>

            <div class="input-group mb-3 mx-auto input90">
              <div class="input-group-prepend">
                <span class="input-group-text pl-3 pr-3" style="border: 0px"
                  ><i class="fa fa-lock"></i
                ></span>
              </div>
              <input
                name="ctl00$ContentPlaceHolder1$txt_parola"
                type="password"
                maxlength="12"
                id="ctl00_ContentPlaceHolder1_txt_parola"
                class="form-control py-4 logininputsize passs"
                placeholder=" Şifre"
                required=""
                v-model.lazy="password"
              />
            </div>
          </div>
          <div class="col-md-12 ml-2" id="beniUnutma">
            <!-- div.col-md-6 başla -->
            <!-- Default checked -->
            <div class="float-left">
              <input
                id="ctl00_ContentPlaceHolder1_CheckBox1"
                type="checkbox"
                name="ctl00$ContentPlaceHolder1$CheckBox1"
                checked="checked"
              />
              <label
                for="beniUnutma"
                class="font-weight-light"
                id="lblbeniunutma"
                style="font-size: 20px"
                >Beni Unutma !</label
              >
              <span></span>
            </div>
            <div class="float-right">
              <a
                class="sifremiUnuttum pr-3 text-capitaliz"
                style="font-size: 20px; z-index: 999"
                href="/parolayi-sifirla"
                >Şifremi Unuttum</a
              >
            </div>
            <span class="clearfix"></span>
          </div>
          <!-- div.col-md-12 bitiş -->
          <br />
          <center>
            <span
              id="ctl00_ContentPlaceHolder1_lbl_durum"
              style="color: Red"
            ></span>
          </center>
          <!--div class="md-form başla-->
          <div class="md-form text-center pt-3">
            <!--btn FACEBOOK başla-->
            <input
              type="submit"
              name="ctl00$ContentPlaceHolder1$btn_uye_girisi"
              value="Giriş Yap"
              id="ctl00_ContentPlaceHolder1_btn_uye_girisi"
              class="btnLogin btn btn02A54A text-center btnwidth90 py-2 text-capitalize"
              style="font-size: 35px; font-weight: 600" @click="login({ email, password })"
            /><br />
            <!-- -->
          </div>
          <!--div class="md-form başla-->

          <!--div class="md-form başla-->
          <div class="md-form text-center float-left" style="margin-top: -5px">
            <div class="row">
              <div class="col-lg-12 Helvatica ml-3 size28">
                Üye Değil misiniz?
              </div>
            </div>
          </div>
          <!--div class="md-form başla-->
          <!--EKLENEN YER-->

          <!--div class="md-form başla-->
          <div class="md-form text-center pb-3">
            <!--btn UYE OL başla-->
            <button
              type="button"
              class="btnLogin22 btnblack text-center btnwidth90 py-2 text-capitalize"
              style="font-size: 35px; font-weight: 600"
              onclick="window.location.href='/kayit-ol'"
            >
              Üye Ol
            </button>
            <!--btn UYE OL bitiş-->
          </div>
          <!--div class="md-form başla-->
        </div>
        <!--"modal-body başla-->
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/') //Anasayfaya yönlendiriyor giriş yapılmışsa
      }
    })
  },
  methods: {
    ...mapActions({
      login: 'login'
    }),
  },
}
</script>