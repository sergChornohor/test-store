<template lang="pug">
.card.flex.flex-center.ani-transition(@click='openProductCard(id+1)')
  .img.flex.flex-center(
    :style="{'background-image':'url('+require('../../assets/img/'+image)+')'}")
  .description.flex
    .product-name
      h2 {{ name }}
    .price
      h1 {{ price }} $
</template>

<script lang="ts">
import { Prop } from 'vue-property-decorator';
import { Vue } from 'vue-class-component';
import { Mutation, Getter, Action } from 'vuex-class';
import { ProductsInterface } from '@/types';

export default class CartProduct extends Vue {
  @Prop() id!: number;

  @Prop() name = '';

  @Prop() price = 0;

  @Prop() image = '';

  @Mutation changeCartIndex: any;

  @Getter getProducts!: ProductsInterface[];

  @Action addProductToCart: any;

  openProductCard(i:number) {
    return (this.$router.push({ name: 'ProductDetail', params: { id: i } }) && this.addProductToCart(i));
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

.card{
  width: 90%;
  height: 150px;
  margin: 2px;
  border-radius: 10px; }
.card:hover{
  transform: scale(1.1);
  background-color: $blue-color1;}
  .description{
    width: 90%;
    height: 15%;}
    .product-name{
      width: 60%;
      height: inherit;}
      .product-name h2{
        font-size: 1.1em;
        color: $black-color;}
    .price{
      width: 40%;}
      .price h1{
        font-size: 1.3em;
        color: $green-color;}
    .img{
      width: 70%;
      height: 70%;
      background-image: url('../../assets/img/camera.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;}
</style>
