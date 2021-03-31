<template lang="pug">
router-view(v-if='isNotProduct()')
.product.flex.justify-content.flex-column(v-else)
  .product-maine-info.flex.flex-column
    .product-name
      h1 {{ getProducts[getID].name }}
    .product-info-container.flex
      .product-photo(
        :style="{'background-image':'url('+require('../assets/img/'+getProducts[getID].image)+')'}")
      .product-buying-info
        .product-price.flex.flex-center
          p price:
          h2 {{ getProducts[getID].price }} $
        .product-quantity.flex.flex-start
          p quantity:
          h2 {{ getProducts[getID].quantity }}
        .buy-form.flex.align-center.space-between
          .btn.buy-btn(@click='buyProduct(getID)') buy
          .btn.cart-btn(@click='reduceProductsQuantity(getID)') add to cart
        .payment-delivery.flex.space-between.align-center
          .link(@click='enableDeliveryInfo=!enableDeliveryInfo') delivery
          .link(@click='enablePayInfo=!enablePayInfo') payment
  .product-description.flex
    .product-text
      .product-text-head.flex.align-center
        h2 {{ getProducts[getID].name }} description
      .product-text-body
        p {{ getProducts[getID].description }}
    DeliveryInfo(v-if='enableDeliveryInfo'
      @close-window='enableDeliveryInfo = false')
    PayInfo(v-if='enablePayInfo'
      @close-window='enablePayInfo = false')
</template>

<script lang="ts">
import { Getter, Mutation } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import DeliveryInfo from '../components/Modal/DeliveryInfo.vue';
import PayInfo from '../components/Modal/PayInfo.vue';
import { ProductsInterface } from '../types';

@Options({
  components: {
    DeliveryInfo,
    PayInfo,
  },
})

export default class ProductView extends Vue {
  @Mutation changeCartIndex: any;

  @Mutation reduceProductsQuantity: any;

  @Getter getProducts!: ProductsInterface[];

  @Getter getID!: number;

  enableDeliveryInfo = false;

  enablePayInfo = false;

  isNotProduct() {
    return this.$router.currentRoute.value.name !== 'Product';
  }

  buyProduct(i:number) {
    return (this.$router.push({ name: 'Cart' }) && this.reduceProductsQuantity(i));
  }
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
        .product-price p{
          font-size: 1.3em;
          color: $black-color;
          margin-right: 10px;}
        .product-price h2{
          font-size: 2.5em;
          color: $green-color;}
      .product-quantity{
        padding-left: 50px;      }
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
          margin: 30px 30px;}
      .product-text p{
        font-size: 1.2em;
        text-align: left;
        margin: 30px 30px;}
</style>
