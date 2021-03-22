<template lang="pug">
.card.flex.flex-center.flex-column
    .img.flex.flex-center(
      :style="{'background-image': 'url('+require('../../assets/img/' + img)+')'}")
    .description
      h2 {{title}}
</template>

<script lang="ts">
import { ProductCategories } from '@/types';
import { Vue } from 'vue-class-component';
import ProductsStore from '@/store/index';

export default class CategoryCard extends Vue {
  img = '';

  title = '';

  // Productstore: Array<ProductCategories> = [];

  // computed(): {
  //   Categorieslist() {
  //     return ProductsStore.state.Categorieslist
  // };
}

</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

.card{
  width: 250px;
  height: 250px;
  margin: 25px }
.card:hover{
  background-color: #fff;
}
  .img{
    width: 80%;
    height: 80%;
    background-image: url('../../assets/img/camera.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;}
  .description{
    width: 80%;
    height: 20%;}
    h2{
      font-size: 25px;
      color: $black-color;}

</style>
