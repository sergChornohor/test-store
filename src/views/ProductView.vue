<template lang="pug">
.product.flex.justify-content.flex-column
  .product-maine-info.flex.flex-column
    .product-name
      h1 ljhdjlkasdhfkl
    .product-info-container.flex
      .product-photo
      .product-buying-info
        .product-price
          h2 234
        .buy-form.flex.space-between.align-center
          .btn.buy-btn buy
          .btn.cart-btn add to cart
        .payment-delivery.flex.space-between.align-center
          .link(@click='enableDeliveryInfo=!enableDeliveryInfo') delivery
          .link(@click='enablePayInfo=!enablePayInfo') payment
  .product-description.flex
    .product-text
      .product-text-head.flex.align-center
        h2 sdhjfgksdfj hjd
      .product-text-body
        p kalksjfskajksdfk;hasd;flexasdkalsddjshglsdklf jhdfgjklhdfg
    DeliveryInfo(v-if='enableDeliveryInfo'
      @close-window='enableDeliveryInfo = false')
    PayInfo(v-if='enablePayInfo'
      @close-window='enablePayInfo = false')
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DeliveryInfo from '../components/Modal/DeliveryInfo.vue';
import PayInfo from '../components/Modal/PayInfo.vue';

@Options({
  components: {
    DeliveryInfo,
    PayInfo,
  },
})

export default class ProductView extends Vue {
  enableDeliveryInfo = false

  enablePayInfo = false

  // methods: {
  //   showDeliveryInfo() {
  //     this.enableDeliveryInfo = true;
  //     console.log(this.enableDeliveryInfo);
  //   }
  // }
}

</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

.product{
  width: 100%;
  height: 100%;
  background: linear-gradient(#deeef5, #eff3e1);}
  .product-maine-info{
    width: 100%;
    height: auto;
    padding: 30px;}
    .product-name{
      width: 100%;
      height: 80px;
      padding: 10px 10px 20px 10px;}
      .product-name h1{
        text-align: center;
        font-size: 2em;
        color: $black-color;}
  .product-info-container{
    }
    .product-photo{
      width: 50%;
      height: 400px;
      background-image: url('../assets/img/mobile.png');
      background-size: contain;
      background-repeat: no-repeat;}
    .product-buying-info{
      width: 50%;
      padding: 20px;}
      .product-price{
        width: 100%;
        height: 70px;
        padding: 5px;}
        .product-price h2{
          font-size: 2em;
          color: $green-color;}
      .buy-form{
        width: 100%;
        height: 120px;
        padding: 50px;}
        .buy-btn{
          box-shadow:inset 0px 1px 0px 0px #caefab;
          background:linear-gradient(to bottom, $buy-btn-green 5%, $buy-btn-green1 100%);
          background-color:$buy-btn-green;
          border:1px solid $buy-btn-brdr;
          color:$white-color;}
        .buy-btn:hover {
          background:linear-gradient(to bottom, $buy-btn-green1 5%, $buy-btn-green 100%);
          background-color:$buy-btn-green1; }
        .cart-btn{
          box-shadow:inset 0px 1px 0px 0px #caefab;
          background:linear-gradient(to bottom, $cart-btn-red 5%, $cart-btn-red1 100%);
          background-color:$cart-btn-red;
          border:1px solid $cart-btn-brdr;
          color:$white-color;}
        .cart-btn:hover {
          background:linear-gradient(to bottom, $cart-btn-red1 5%, $cart-btn-red 100%);
          background-color:$cart-btn-red1; }
      .payment-delivery{
        height: 40px;
        padding: 10px 100px;}
        .link{
          height: 100%;
          width: auto;
          cursor: pointer;
          text-align: center;}
        .link:hover{
          color: $dark-blue-color;}
  .product-description{
    width: 100%;
    height: auto;}
    .product-text{
      width: 100%;
      height: auto;}
      .product-text-head{
        height: 50px;
        margin: 20px 0;
        background-color: rgb(189, 183, 183);}
        .product-text-head h2{
          height: 30px;
          font-size: 1.8em;
          font-weight: 500;
          text-align: left;
          margin: 0 20px;}
      .product-text p{
        font-size: 1.2em;
        text-align: left;}
</style>
