<template lang="pug">
.card.flex.flex-center.flex-column.ani-transition
  .img.flex.flex-center(
    :style="{'background-image':'url('+require('@/assets/img/'+findProductById(pr).image)+')'}"
    @click='openProductCard(getProducts[pr].id)')
  .description.flex
    .product-name
      h2 {{ findProductById(pr).name }}
    .price
      h1 {{ findProductById(pr).price }} $
  .buy-form.product-cart-buy-form.flex.space-between.align-center
    .btn.buy-btn(@click='buyProduct(pr)') buy
    .btn.cart-btn(@click='reduceProductsQuantity(pr)') add to cart
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Action, Getter, Mutation } from 'vuex-class';
import { Prop } from 'vue-property-decorator';
import { ProductsInterface } from '@/types';

export default class ProductCard extends Vue {
  @Prop() pr!: number;

  @Getter getProducts!: ProductsInterface[];

  @Mutation reduceProductsQuantity: any;

  @Mutation getThisProductID: any;

  @Action addProductToCart: any;

  @Mutation addToCartlistTemp: any;

  @Mutation changeEnableNoProduct: any;

  findProductById(ID:number) {
    return this.getProducts.find((x) => x.id === ID);
  }

  openProductCard(i:number) {
    return (this.$router.push({ name: 'ProductDetail', params: { id: i } }) && this.getThisProductID(i));
  }

  buyProduct(i:number) {
    if (this.checkProductQuantity(i)) return (this.$router.push({ name: 'Cart' }) && this.reduceProductsQuantity(i));
    // eslint-disable-next-line
    else return this.changeEnableNoProduct();
  }

  checkProductQuantity(ID:number) {
    const index = this.getProducts.findIndex((obj) => obj.id === ID);
    if (this.getProducts[index].quantity > 0) return true; // eslint-disable-next-line
    else return false;
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

.card{
  width: 90%;
  height: 90%;
  margin: 25px;
  border-radius: 10px;
  @include mq('tablet'){
    margin: 15px;
  }}
.card:hover{
  transform: scale(1.1);
  background-color: $blue-color1;}
  .img{
    width: 70%;
    height: 70%;
    background-image: url('../../assets/img/camera.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;}
  .description{
    width: 90%;
    height: 15%;}
    .product-name{
      width: 60%;
      height: inherit;}
      .product-name h2{
        font-size: 1.2em;
        color: $black-color;
        @include mq('tablet'){
          font-size: 1.1em;
        }
        @include mq('phone-wide'){
          font-size: 1em;
        }}
    .price{
      width: 40%;}
      .price h1{
        font-size: 1.5em;
        color: $green-color;
        @include mq('tablet'){
          font-size: 1.3em;
        }
        @include mq('phone-wide'){
          font-size: 1.1em;
        }}
  .product-cart-buy-form{
    width: 100%;
    height: 15%;
    padding: 1% 3%;}
    .btn {
      width: 47%;
      height: 100%;
      padding: 6px;
      font-size:15px;}
</style>
