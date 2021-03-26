<template lang="pug">
.cart-container.flex
  .cart-declair-name
  .cart-content
    .cart-form
      form
        it-input(v-model="statusValue" status="success" message="Success")
        label
        input
    .cart-product
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import Equal from 'equal-vue';

export default class CartView extends Vue {

}
</script>

<style lang="scss" scoped>
@import 'equal-vue/dist/style.css'

</style>
