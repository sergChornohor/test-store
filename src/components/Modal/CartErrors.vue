<template lang="pug">
.modal-background.flex.flex-center(
  @keyup.esc="$emit('close-window')"
  @click.self="$emit('close-window')")
  .modal-content-wrapper
    .modal-content.flex-column
      .product-name
        h2 Fill all form filds
      .text-info
        ul
          li(v-for='(errors) in getCartErrors'
            :key='errors') {{ errors }}
</template>

<script lang="ts">
import { Getter } from 'vuex-class';
import { Vue } from 'vue-class-component';

export default class CartErrors extends Vue {
  @Getter getCartErrors:any;
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
  background: $red-color1;}
  .modal-content-wrapper{
    width: 40%;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 15px;
    background-color: $bg-color1;
    padding-bottom: 15px;
    opacity: 1;
    z-index: 999;}
    .modal-content{
      width: 100%;
      height: 400px;
      margin-bottom: 10px;}
      .product-name{
        width: 100%;
        height: 50px;
        padding: 15px;}
        .product-name h2{
          font-size: 2.5em;
          color: #000;}
      .text-info{
        width: 100%;
        height: auto;
        padding: 20px;}
      .text-info li{
        font-size: 1.8em;
        color: red;
        padding: 15px;
        }
</style>
