<template lang="pug">
.card.flex.flex-center.flex-column.ani-transition
  .img.flex.flex-center(
    :style="{'background-image':'url('+require('@/assets/img/'+image)+')'}"
    @click='openProductCard(pr)')
  .description.flex
    .product-name
      h2 {{ name }}
    .price
      h1 {{ price }} $
  .buy-form.product-cart-buy-form.flex.space-between.align-center
    .btn.buy-btn(@click='buyProduct(pr)') buy
    .btn.cart-btn(@click='reduceProductsQuantity(pr)') add to cart
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Getter, Mutation } from 'vuex-class';
import { Prop } from 'vue-property-decorator';
import { ProductsInterface } from '@/types';

export default class ProductCard extends Vue {
  @Prop() pr = 0;

  @Prop() name!: string;

  @Prop() price!: number;

  @Prop() image!: string;

  @Getter getProducts!: ProductsInterface[];

  @Getter gettID!: any;

  @Mutation reduceProductsQuantity: any;

  @Mutation thisProductID: any;

  @Mutation addToCartlistTemp: any;

  @Mutation changeEnableNoProduct: any;

  openProductCard(i:number) {
    if (this.checkProductQuantity(i)) return (this.$router.push({ name: 'Product' }) && this.thisProductID(i)); // eslint-disable-next-line
    else return this.changeEnableNoProduct();
  }

  buyProduct(i:number) {
    if (this.checkProductQuantity(i)) return (this.$router.push({ name: 'Cart' }) && this.reduceProductsQuantity(i));
    // eslint-disable-next-line
    else return this.changeEnableNoProduct();
  }

  checkProductQuantity(index:number) {
    console.log(this.getProducts[index].quantity);
    if (this.getProducts[index].quantity > 0) return true; // eslint-disable-next-line
    else return false;
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

.card{
  width: 250px;
  height: 250px;
  margin: 25px;
  border-radius: 10px; }
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
        color: $black-color;}
    .price{
      width: 40%;}
      .price h1{
        font-size: 1.5em;
        color: $green-color;}
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
