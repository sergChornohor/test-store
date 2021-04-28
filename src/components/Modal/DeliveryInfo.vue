<template lang="pug">
.modal-background.flex.flex-center(
  @keyup.esc="$emit('close-window')"
  @click.self="$emit('close-window')")
  .modal-content-wrapper
    .modal-content
      .product-name
        h2 NovaPoshta
      .delivery-info
        ul
          li
            p sdfgsdfgsdfgdsfggsdf sdfgsdfgdsfgsdfg
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class DeliveryInfo extends Vue {
  emits = ['close-window'];
}
</script>

<style lang="scss" scoped>
@import '../../assets/style.scss';

.modal-background{
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: $blue-color2;}
  .modal-content-wrapper{
    width: 40%;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 15px;
    background-color: $bg-color1;
    padding-bottom: 15px;
    opacity: 1;
    z-index: 999;
    @include mq('tablet'){
      width: 60%;
    }
    @include mq('phone-wide'){
      width: 80%;
    }}
    .modal-content{
      width: 100%;
      height: 400px;
      margin-bottom: 10px;}
      .product-name{
        width: 100%;
        height: 50px;
        padding: 10px;}
        .product-name h2{
          font-size: 2em;
          color: #000;}
      .delivery-info{
        width: 100%;
        height: auto;
        padding: 10px;}
</style>
