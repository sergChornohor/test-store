<template lang="pug">
.cart-wrapper.flex.flex-center
  .cart-container.flex.flex-column
    .cart-declair-name RTYRCT HGK HJSHJB
    .cart-content.flex.space-between
      .cart-form
        form.flex.flex-column
          label твоїх планів на мене не знаю
          input
          input
      .cart-product
        ProductCard
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductCard from '../components/Products/ProductCard.vue';
// import Equal from 'equal-vue';

@Options({
  components: {
    ProductCard,
  },
})

export default class CartView extends Vue {

}
</script>

<style lang="scss" scoped>
// @import 'equal-vue/dist/style.css'
.cart-wrapper{
  width: 100%;
  height: 100%;
}
.cart-container{
  width: 70%;
  height: 50%;
  .cart-declair-name{
    width: 100%;
    height: 100px;
    font-size: 3em;}
  .cart-content{
    width: 100%;
    height: 500px;
    border: 2px solid red;
    .cart-form{
      width: 50%;
      height: 100%;
      border: 2px solid green;}
    .cart-product{
      width: 50%;
      height: 100%;
      border: 2px solid yellow;}
  }
  }

</style>
