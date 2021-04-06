<template lang="pug">
router-view(v-if='isNotHome()')
.container.flex(v-else)
  .gadgets.ani-transition.flex.flex-center
    .title-container.flex.flex-center(@click='goToCategory(gadgets)') Gadgets
  .goods.ani-transition.flex.flex-center
    .title-container.flex.flex-center(@click='goToCategory(goods)') Goods
</template>

<script lang="ts">
import { Getter, Mutation } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';
import { ProductCategories } from '@/types';

export default class MainePage extends Vue {
  @Getter getCatList!: ProductCategories[];

  @Mutation changeCategFlag: any;

  gadgets = 'gadgets';

  goods = 'goods';

  goToCategory(cat:string) {
    return (this.pushRouteCat() && this.changeCategFlag(cat));
  }

  isNotHome() {
    return this.$router.currentRoute.value.name !== 'Home';
  }

  pushRouteCat() {
    return this.$router.push({ name: 'Category' });
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

.container{
  width: 100%;
  height: 100%;}
  .gadgets{
    width: 50%;
    height: 100%;
    background-color: $blue-color2;}
  .gadgets:hover{
    background-color:$blue-color;
    transform: scaleX(2.1);}
  .goods{
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 0, 0.445);}
  .goods:hover{
    background-color: $yellow-color;
    transform: scaleX(2.1);}
    .title-container{
      width: 250px;
      height: 500px;
      font-size: 5em;
      writing-mode: vertical-rl;
      text-orientation: upright;
      @include mq('desktop'){
        font-size: 4.5em;
      }
      @include mq('tablet-wide'){
        font-size: 4em;
      }
      @include mq('tablet'){
        font-size: 3.5em;
      }
      @include mq('phone-wide'){
        font-size: 3em;
      }}
    .goods:hover .title-container{
      font-size: 6em;
      transform: translateX(-60px);
      color: $blue-color;
      cursor: pointer;
      @include mq('desktop'){
        font-size: 5.5em;
      }
      @include mq('tablet-wide'){
        font-size: 5em;
      }
      @include mq('tablet'){
        font-size: 4.5em;
      }
      @include mq('phone-wide'){
        font-size: 4em;
      }}
    .gadgets:hover .title-container{
      font-size: 6em;
      transform: translateX(60px);
      color: $yellow-color;
      cursor: pointer;
      @include mq('desktop'){
        font-size: 4.5em;
      }
      @include mq('tablet-wide'){
        font-size: 4em;
      }
      @include mq('tablet'){
        font-size: 3.5em;
      }
      @include mq('phone-wide'){
        font-size: 3em;
      }}
</style>
