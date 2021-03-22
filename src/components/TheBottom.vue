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
  height: 50px;
  background-color: $yellow-color;}
  .bottom-info{
    height: 30px;}
  .bottom-copyrights{
    height: 20px;}
</style>
