<template lang="pug">
.container.flex.flex-center.flex-column
  .store-name
    h1 AFGH JHLJHLJH
  .some-text
    p {{text}}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Category extends Vue {
  text =
  'sdfghfkihgd fgjkdg fbdf  gbkbnkgnfbdfngb dfhghdfg df fd gdfgh dfgh dfg f dfghdfhd'
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.container{
  width: 100%;
  height: 100%;
}
.store-name{
  width: 50%;
  height: 100px;
  h1{
    font-size: 3em;
    color: brown;}
  }
.some-text{
  width: 70%;
  height: 500px;
  p{
    font-size: 1.6em; }
  }
</style>
