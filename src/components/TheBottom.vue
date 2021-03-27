<template lang="pug">
.bottom-container.flex.flex-column
  .bottom-info
    h3 sdlkjhfjlkhdfklg
  .bottom-copyrights
    p All copyright reseived 2021
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class TheBottom extends Vue {

}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

.bottom-container{
  width: 100%;
  height: 40px;
  background-color: $bg-color1;}
  .bottom-info{
    height: 25px;}
  .bottom-copyrights{
    height: 15px;}
</style>
