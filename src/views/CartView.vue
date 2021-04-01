<template lang="pug">
.cart-wrapper.flex.flex-center
  .cart-container.flex.flex-column
    .cart-declair-name RTYRCT HGK HJSHJB
    .cart-content.flex.space-between
      .cart-form
        form.flex.flex-column
          label() First Name
          input(type='text', name='firstName', value='')#firstname
          label() Second Name
          input(type='text', name='secondName', value='')#secondname
          label() Phone Number
          input(type='number', name='phoneNumber', value='')#phonenumber
          label Paymment Method
          select
            option(value='cash') Cash
            option(value='creditCart') Credit Cart
          label Delivery Method
          select
            option(value='Novaposhta') Nova Poshta
            option(value='MistExpress') Mist Express
      .cart-product.flex.flex-column.space-between(v-if='getTotalPrice != 0')
        ul.flex.justify-center.flex-column
          li.flex.justify-center(v-for='(items, id) in getCartlistTemp',
            :key='id')
            CartProduct(
              :name='items.name'
              :image='items.image'
              :price='items.price'
            )
        .cart-total-price Total Price: {{ getTotalPrice }} $
    .cart-confirm.flex.space-between
      .btn.buy-btn(@click='confirmOdrer()') Comfirm
      .btn.cart-btn(@click='clearCartIndex(getID)') Clear
  OrderConfirm(v-if='enableOrderConfirm'
    @close-window='enableOrderConfirm = false')
</template>

<script lang="ts">
import { Getter, Mutation } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';
import ProductCard from '@/components/Products/ProductCard.vue';
import OrderConfirm from '@/components/Modal/OrderConfirm.vue';
import CartProduct from '@/components/Products/CartProduct.vue';
import { ProductsInterface } from '@/types';

@Options({
  components: {
    CartProduct,
    ProductCard,
    OrderConfirm,
  },
})

export default class CartView extends Vue {
  @Mutation clearCartIndex:any;

  @Getter getTotalPrice:any;

  @Getter getCartlistTemp!: ProductsInterface[];

  enableOrderConfirm = false;

  @Getter getID!: number;

  confirmOdrer() { // eslint-disable-next-line
    return this.enableOrderConfirm = !this.enableOrderConfirm;
  }

  mounted() {
    console.log(this.getCartlistTemp);
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.cart-wrapper{
  width: 100%;
  height: 100%;}
.cart-container{
  width: 75%;
  height: 75%;
  .cart-declair-name{
    width: 100%;
    height: 100px;
    font-size: 3em;}
  .cart-content{
    width: 100%;
    height: 500px;
    margin: 20px 0;
    .cart-form{
      width: 50%;
      height: 100%;
      form{
        padding: 30px 0;
      }}
    .cart-product{
      width: 50%;
      height: 100%;
      // overflow-y: scroll;
      overflow-x: hidden;
      li{
        width: 90%;
      }
      }
    .cart-total-price{
      width: 100%;
      margin: 0 30px 50px 30px;
      text-align: left;}
  }
  input{
    width: 90%;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px auto 25px;
    padding: 5px 10px;}
  input:focus {
    border: 3px solid #555; }
  select {
    width: 90%;
    height: 50px;
    margin: 5px auto 25px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f1f1f1; }
    select:focus {
      border: 3px solid #555; }
      option{
        height: 30px; }
  .cart-confirm{
    padding: 0 17%;}
  }
</style>
