<template lang="pug">
.card.flex.flex-center.flex-column.ani-transition
    .img(
      :style="{'background-image': 'url('+require('../../assets/img/' +  img )+')'}")
    .description.flex.flex-center
      h2 {{ title }}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class CategoryCard extends Vue {
  @Prop() img!: string

  @Prop() title!: string
}

</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

.card{
  width: 190px;
  height: 190px;
  margin: 5px;
  border-radius: 8px; }
.card:hover{
  background-color: $blue-color2;
  transform: scale(1.1);}
  .img{
    width: 70%;
    height: 70%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;}
  .description{
    width: 80%;
    height: 30%;}
    h2{
      font-size: 25px;
      color: $dark-blue-color;}
</style>
