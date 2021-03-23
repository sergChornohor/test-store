<template lang="pug">
.card.flex.flex-center.flex-column(@click='$router.push({ name: "Product"})')
    .img.flex.flex-center
    .description
      h2 NAMEl asjd
      // p fjkldghadfglk jkahgklldflg kajdfgjkldfg kajdfgjkdfg kjadfgklsdflkg
    .price
      h1 456 uah
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ProductCard extends Vue {

}
</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

.card{
  width: 250px;
  height: 250px;
  margin: 25px }
.card:hover{
  background-color: rgb(160, 119, 119);
}
  .img{
    width: 70%;
    height: 70%;
    background-image: url('../../assets/img/camera.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;}
  .description{
    width: 80%;
    height: 15%;}
    h2{
      font-size: 1.2em;
      color: $black-color;}
    .description p{
      font-size: 1.5em;
      color: $black-color;}
  .price{
    width: 80%;
    height: 15%;}
    .price h1{
      font-size: 1.7em;
      color: $green-color;}
</style>
