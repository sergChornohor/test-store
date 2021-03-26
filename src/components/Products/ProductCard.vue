<template lang="pug">
.card.flex.flex-center.flex-column.ani-transition
    .img.flex.flex-center(@click='$router.push({ name: "Product"})')
    .description.flex
      .product-name
        h2 NAMEl asjd
      .price
        h1 456 uah
    .buy-form.product-cart-buy-form.flex.space-between.align-center
      .btn.buy-btn buy
      .btn.cart-btn(@click="$emit('addCart')") add to cart
</template>

<script lang="ts">
import { Emit } from 'vue-property-decorator';
import { Vue } from 'vue-class-component';
// import { emits } from 'vue-property-decorator';

export default class ProductCard extends Vue {
  emits = ['addCart'];
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
  background-color: $blue-color1;
}
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
      height: inherit;
    }
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
