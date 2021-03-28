<template lang="pug">
.cart-wrapper.flex.flex-center
  .cart-container.flex.flex-column
    .cart-declair-name RTYRCT HGK HJSHJB
    .cart-content.flex.space-between
      .cart-form
        form.flex.flex-column
          label() First Name
          input(type='text', name='firstName', value='')#firstname
          label() Second Name
          input(type='text', name='secondName', value='')#secondname
          label() Phone Number
          input(type='number', name='phoneNumber', value='')#phonenumber
          label Paymment Method
          select
            option(value='cash') Cash
            option(value='creditCart') Credit Cart
          label Delivery Method
          select
            option(value='Novaposhta') Nova Poshta
            option(value='MistExpress') Mist Express
      .cart-product.flex.flex-column.space-between
        CartProduct
        .cart-total-price Total Price: {{ totalPrice }} $
    .cart-confirm.flex.space-between
      .btn.buy-btn Comfirm
      .btn.cart-btn(@click='clearCartIndex') Clear
</template>

<script lang="ts">
import { Mutation } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';
import ProductCard from '@/components/Products/ProductCard.vue';
import CartProduct from '../components/Products/CartProduct.vue';
// import Equal from 'equal-vue';

@Options({
  components: {
    CartProduct,
    ProductCard,
  },
})

export default class CartView extends Vue {
  @Mutation clearCartIndex:any;
}
</script>

<style lang="scss" scoped>
// @import 'equal-vue/dist/style.css'
@import '../assets/style.scss';
.cart-wrapper{
  width: 100%;
  height: 100%;
}
.cart-container{
  width: 70%;
  height: 75%;
  .cart-declair-name{
    width: 100%;
    height: 100px;
    font-size: 3em;}
  .cart-content{
    width: 100%;
    height: 500px;
    margin: 20px 0;
    // border: 2px solid red;
    .cart-form{
      width: 50%;
      height: 100%;
      // border: 2px solid green;
      form{
        padding: 30px 0;
      }}
    .cart-product{
      width: 50%;
      height: 100%;
      // border: 2px solid yellow;
      }
    .cart-total-price{
      width: 100%;
      margin: 0 30px 50px 30px;
      text-align: left;
    }
  }
  input{
    width: 90%;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px auto 25px;
    padding: 5px 10px;}
  input[type=text]:focus {
    border: 3px solid #555;
    }
  select {
    width: 90%;
    height: 50px;
    margin: 5px auto 25px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f1f1f1; }
    select:focus {
      border: 3px solid #555; }
      option{
        height: 30px; }
  .cart-confirm{
    padding: 0 17%;
  }
  }

</style>
