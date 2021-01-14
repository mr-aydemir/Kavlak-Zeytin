<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-left pl-5" id="">
        <h1 class="modal-title"></h1>
      </div>
      <div class="modal-body" style="margin-top: -25px">
        <!--"modal-body başla-->

        <div class="row text-center">
          <div class="col-lg-12">
            <b>
              <br />
            </b>
            <h2 class="Helvatica" id="kavlakuyeOlun">
              <span class="color02A54A">kavlak.com.tr</span> ‘ye Üye Olun
            </h2>
          </div>
          <div class="col-lg-12" style="margin-top: -12px">
            <small class="HelvaticaRegular color7B7B7B size19"
              >Size Özel İndirim ve Avantajlardan Faydalanın</small
            >
          </div>
        </div>

        <!--div class="md-form başla-->

        <!--div class="md-form bitiş-->

        <!--form  başla-->

        <div class="text-center my-2 pb-2">
          <h3 class="Helvatica"></h3>
        </div>
        <div class="row rounded mx-auto text-center input90">
          <div class="col-lg-12">
            <input
              name="ctl00$ContentPlaceHolder1$TxtAd"
              type="text"
              maxlength="50"
              id="ctl00_ContentPlaceHolder1_TxtAd"
              tabindex="1"
              class="form-control mb-3 py-3"
              placeholder="Ad *"
              required=""
              v-model.lazy="name"
            />
          </div>
          <div class="col-lg-12">
            <input
              name="ctl00$ContentPlaceHolder1$TxtSoyad"
              type="text"
              maxlength="50"
              id="ctl00_ContentPlaceHolder1_TxtSoyad"
              tabindex="2"
              class="form-control mb-3 py-3"
              placeholder="Soyad *"
              required=""
              v-model.lazy="surname"
            />
          </div>
          <div class="col-lg-12">
            <input
              name="ctl00$ContentPlaceHolder1$TxtEMail"
              type="text"
              maxlength="100"
              id="ctl00_ContentPlaceHolder1_TxtEMail"
              tabindex="3"
              class="form-control mb-3 py-3"
              placeholder="E-Posta Adresi *"
              required=""
              v-model.lazy="email"
            />
          </div>
          <div class="col-lg-12">
            <input
              name="ctl00$ContentPlaceHolder1$TxtParola"
              type="password"
              maxlength="12"
              id="ctl00_ContentPlaceHolder1_TxtParola"
              tabindex="4"
              class="form-control mb-3 py-3"
              placeholder="Şifre *"
              required=""
              v-model.lazy="password"
            />
          </div>
          <div class="col-lg-12">
            <input
              name="ctl00$ContentPlaceHolder1$TxtParolaTekrar"
              type="password"
              maxlength="12"
              id="ctl00_ContentPlaceHolder1_TxtParolaTekrar"
              tabindex="5"
              class="form-control mb-3 py-3"
              placeholder="Şifre Tekrar *"
              max="14"
              min="6"
              required=""
              v-model.lazy="password2"
            />
          </div>
          <div class="col-lg-12">
            <input
              name="ctl00$ContentPlaceHolder1$TxtGSM"
              type="text"
              maxlength="15"
              id="ctl00_ContentPlaceHolder1_TxtGSM"
              tabindex="6"
              value=""
              class="form-control mb-3 py-3 TxtGSM"
              placeholder="Cep Telefonu *"
              data-mask="(000) 000-00-00"
              onkeydown="sifiriKaldir()"
              required=""
              autocomplete="off"
              v-model.lazy="phone"
            />
          </div>

          <div class="col-lg-6">
            <div class="border rounded py-1">
              <div class="form-check py-1 text-left">
                <input
                  id="ctl00_ContentPlaceHolder1_RadErkek"
                  type="radio"
                  name="ctl00$ContentPlaceHolder1$cinsiyet"
                  :checked="gender == 0"
                  @click="gender = 0"
                /><label for="ctl00_ContentPlaceHolder1_RadErkek">Erkek</label>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="border rounded py-1">
              <div class="form-check py-1 text-left">
                <input
                  id="ctl00_ContentPlaceHolder1_RadKadin"
                  type="radio"
                  name="ctl00$ContentPlaceHolder1$cinsiyet"
                  :value="gender == 1"
                  @click="gender = 1"
                /><label for="ctl00_ContentPlaceHolder1_RadKadin">Kadın</label>
              </div>
            </div>
          </div>
        </div>

        <!--form  bitiş-->

        <!--form  bitiş-->
        <div class="col-lg-12 text-center pt-2">
          <!--sözleşme  bitiş-->

          <div class="ml-4">
            <div class="float-left">
              <label
                for="uyeliksozlesmesi"
                class="HelvaticaRegular text-left uyeliksozlesmesisize"
              >
                <input
                  id="ctl00_ContentPlaceHolder1_ChkSozlesme"
                  type="checkbox"
                  name="ctl00$ContentPlaceHolder1$ChkSozlesme"
                  v-model="sozlesmeOnayi"
                  checked="checked"
                /><!--BURAYA TASIDIM-->
                <small class="color02A54A">Üyelik Sözleşmesi </small>şartlarını
                okudum ve Kabul ediyorum.
              </label>
            </div>
          </div>

          <div class="ml-4">
            <div class="float-left">
              <label
                for="uyeliksozlesmesi"
                class="HelvaticaRegular text-left uyeliksozlesmesisize"
              >
                <input
                  id="ctl00_ContentPlaceHolder1_ChkIzin"
                  type="checkbox"
                  name="ctl00$ContentPlaceHolder1$ChkIzin"
                  checked="checked"
                  v-model="tanitimOnayi"
                />
                Tarafıma pazarlama ve tanıtım Amaçlı iletişime geçilmesine
              </label>
            </div>
          </div>

          <div class="ml-4">
            <div class="float-left">
              <label
                for="uyeliksozlesmesi"
                class="HelvaticaRegular text-left uyeliksozlesmesisize"
              >
                izin veriyorum.
              </label>
            </div>
          </div>
        </div>
        <!--sözleşme  bitiş-->

        <style>
          @media only screen and (max-width: 992px) {
            .Kbtn {
              width: 90% !important;
              height: 55px;
              font-size: 18px;
              padding-bottom: 14px;
            }
          }
        </style>

        <div class="col-lg-12 mt-5 pt-2">
          <!--UYE OL btn  başla-->
          <div class="text-center pt-2">
            <br />
            <span
              id="ctl00_ContentPlaceHolder1_LblDurum"
              style="color: Red"
            ></span>
            <input
              type="submit"
              name="ctl00$ContentPlaceHolder1$BtnUyeOl"
              value="ÜYE OL"
              id="ctl00_ContentPlaceHolder1_BtnUyeOl"
              class="btnblack btn text-center btnwidth90 py-3 waves-effect Helvatica Kbtn size35"
              onmousedown="okey()"
              style="font-weight: 600"
              v-on:click="
                register({
                  email: email,
                  password: password,
                  name: name + ' ' + surname,
                  phone: phone,
                  gender: gender,
                  tanitimOnayi: tanitimOnayi,
                  sozlesmeOnayi: sozlesmeOnayi,
                })
              "
            />
          </div>
        </div>
        <!--UYE OL btn bitiş-->
      </div>
      <!--"modal-body başla-->

      <style>
        @media only screen and (max-width: 991px) {
          #girisyapp button {
            float: left !important;
            width: 85% !important;
            border-radius: 5px;
          }
        }
      </style>
      <div
        class="modal-footer d-flex justify-content-center pt-4"
        style="border: 0px; background: #ddd"
      >
        <div class="" id="zatenuyemisinizz">
          <span class="Helvatica float-left" id="">Zaten Üye misiniz?</span>
        </div>
        <div class="pl-4 ml-5" id="girisyapp">
          <button
            class="btn btn02A54A rounded Helvatica float-right ml-5"
            onclick="window.location.href='/Giris/Uye'"
          >
            GİRİŞ YAP
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAlreadyLogged = true
        this.$router.push('/') //Anasayfaya yönlendiriyor giriş yapılmışsa
      } else this.isAlreadyLogged = false
    })
  },
  data() {
    return {
      isAlreadyLogged: false,
      email: '',
      password: '',
      password2: '',
      name: '',
      surname: '',
      phone: '',
      showPassword: true,
      gender: 0,
      sozlesmeOnayi: false,
      tanitimOnayi: false,
    }
  },
  methods: {
    ...mapActions({
      register: 'register'
    }),
  },
}
</script>