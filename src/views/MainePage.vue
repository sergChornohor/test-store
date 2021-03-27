<template lang="pug">
.container.flex
  .gadgets.ani-transition
  .goods.ani-transition
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class MainePage extends Vue {
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100%;
}
  .gadgets{
    width: 50%;
    height: 100%;
    background-color: rgba(255, 0, 0, 0.5) ;
  }
  .gadgets:hover{
    background-color:red;
    transform: scaleX(2);
  }
  .goods{
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 0, 0.445);
  }
  .goods:hover{
    background-color: yellow;
    transform: scaleX(2);
  }
</style>
