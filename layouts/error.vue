<template>
  <div class="deneme" style="text-align: center;">
    <div class="row">
      <div class="col-xs-12">
        <div class="deneme">
          <div class="empty-basket-content">
            <span class="icon-website"></span>
          </div>
          <h2 >
            404
          </h2>
          <h4>Aradığınız sayfa bulunamadı!</h4>
          <p>Aradığınız sayfa projeye dahil olmayabilir.</p>
          <a
            class="btn btn-primary signup-form__button change-password-form__button"
            href="/"
            >ANASAYFA</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>