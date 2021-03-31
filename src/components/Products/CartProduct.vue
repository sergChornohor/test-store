<template lang="pug">
.card.flex.flex-center.ani-transition(@click='$router.push({ name: "Product"})')
  .img.flex.flex-center(
    :style="{'background-image':'url('+require('../../assets/img/'+getProducts[getID].image)+')'}")
  .description.flex
    .product-name
      h2 {{ getProducts[getID].name }}
    .price
      h1 {{ getProducts[getID].price }} $
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Mutation, Getter } from 'vuex-class';
import { Prop } from 'vue-property-decorator';
import { ProductsInterface } from '../../types';

export default class CartProduct extends Vue {
  @Mutation changeCartIndex: any;

  @Getter getProducts!: ProductsInterface[];

  @Getter getID!: any;

  beforeMount() {
    console.log(this.getID);
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

.card{
  width: 100%;
  height: 150px;
  margin: 5px;
  border-radius: 10px; }
.card:hover{
  transform: scale(1.1);
  background-color: $blue-color1;}
  .description{
    width: 90%;
    height: 15%;}
    .product-name{
      width: 60%;
      height: inherit;
    }
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
