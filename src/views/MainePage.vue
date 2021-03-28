<template lang="pug">
.container.flex
  .gadgets.ani-transition.flex.flex-center
    .title-container.flex.flex-center(@click='goToGadgets()') Gadgets
  .goods.ani-transition.flex.flex-center
    .title-container.flex.flex-center(@click='goToGoods()') Goods
</template>

<script lang="ts">
import { Getter, Mutation } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';

export default class MainePage extends Vue {
  @Getter getCatListGadgets: any;

  @Mutation changecategFlagforGadgets: any;

  @Mutation changecategFlagforGoods: any;

  goToGadgets() {
    return (this.pushRouteCat() && this.changeCatGadgents());
  }

  pushRouteCat() {
    return this.$router.push({ name: 'Category' });
  }

  changeCatGadgents() {
    return this.changecategFlagforGadgets();
  }

  changeCatGoods() {
    return this.changecategFlagforGoods();
  }

  goToGoods() {
    return (this.pushRouteCat() && this.changeCatGoods());
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

.container{
  width: 100%;
  height: 100%;
}
  .gadgets{
    width: 50%;
    height: 100%;
    background-color: $blue-color2;
  }
  .gadgets:hover{
    background-color:$blue-color;
    transform: scaleX(2.1);
  }

  .goods{
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 0, 0.445);
  }
  .goods:hover{
    background-color: $yellow-color;
    transform: scaleX(2.1);
  }
    .title-container{
      width: 250px;
      height: 500px;
      font-size: 5em;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
    .goods:hover .title-container{
      font-size: 6em;
      transform: translateX(-60px);
      color: $blue-color;
      cursor: pointer;
    }
    .gadgets:hover .title-container{
      font-size: 6em;
      transform: translateX(60px);
      color: $yellow-color;
      cursor: pointer;
    }
</style>
