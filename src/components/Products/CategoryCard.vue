<template lang="pug">
.card.flex.flex-center.flex-column
    .img.flex.flex-center
    .description
      h2
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class CategoryCard extends Vue {}
</script>

<style scoped lang="scss">
.card{
  width: 100%;
  height: 100%; }
  .img{
    width: 80%;
    height: 80%;
    background-image: url('../../assets/img/camera.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .description{
    width: 80%;
    height: 20%;
  }

</style>
