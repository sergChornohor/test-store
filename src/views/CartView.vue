<template lang="pug">
.cart-wrapper.flex.flex-center
  .cart-container.flex.flex-column
    .cart-declair-name YOUR CART DESK
    .cart-content.flex.space-between
      .cart-form
        form.flex.flex-column(
          ref='form'
          id='orderForm'
          @submit.prevent='checkForm()'
          method='post')
          label(for='fulleName') Full Name
          input(type='text', name='fullName', v-model='thisOrder.fullName', id='fullName')
          label(for='phoneNumber') Phone Number
          input(type='number', name='phoneNumber', v-model='thisOrder.phoneNumber',id='phoneNumber')
          label(for='homeAddress') Home Address
          input(type='text', name='homeAddress', v-model='thisOrder.homeAddress', id='homeAddress')
          label(for='paymentMethod') Paymment Method
          select(name='paymentMethod' v-model='thisOrder.paymentMethod', id='paymentMethod')
            option(value='cash') Cash
            option(value='creditCart') Credit Cart
          label(for='deliveryMethod') Delivery Method
          select(name='deliveryMethod', v-model='thisOrder.deliveryMethod', id='deliveryMethod')
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
              :id='items.id'
            )
        .cart-total-price Total Price: {{ getTotalPrice }} $
    .cart-confirm.flex.space-between
      .btn.buy-btn(@click='checkForm()') Comfirm
      .btn.cart-btn(@click='clearCartIndex(getID)') Clear
  CartErrors(v-if='enableCartErrors'
    @close-window='enableCartErrors = false')
  OrderConfirm(v-if='enableOrderConfirm'
    @close-window='enableOrderConfirm = false')
</template>

<script lang="ts">
import { Action, Getter, Mutation } from 'vuex-class';
import { Options, Vue } from 'vue-class-component';
import ProductCard from '@/components/Products/ProductCard.vue';
import OrderConfirm from '@/components/Modal/OrderConfirm.vue';
import CartErrors from '@/components/Modal/CartErrors.vue';
import CartProduct from '@/components/Products/CartProduct.vue';
import { ProductsInterface, OrderInfoInterface } from '@/types';

@Options({
  components: {
    CartProduct,
    ProductCard,
    OrderConfirm,
    CartErrors,
  },
})

export default class CartView extends Vue {
  formErrors: any[] = [];

  thisOrder = {
    fullName: '',
    phoneNumber: 380,
    homeAddress: '',
    paymentMethod: '',
    deliveryMethod: '',
  };

  enableOrderConfirm = false;

  enableCartErrors = false;

  @Getter getTotalPrice:any;

  @Getter getCartlistTemp!: ProductsInterface[];

  @Getter getID!: number;

  @Getter getCartErrors:any;

  @Getter getOrderInfo:any;

  @Mutation clearCartIndex:any;

  @Mutation setCartErrors:any;

  @Mutation addOrder!: any;

  @Action pushOrder:any;

  confirmOdrer() { // eslint-disable-next-line
    return this.enableOrderConfirm = !this.enableOrderConfirm;
  }

  checkForm() {
    this.formErrors = [];
    if (!this.thisOrder.fullName) {
      this.formErrors.push('Fill the Full Name fild!');
    }
    if (!this.thisOrder.phoneNumber) {
      this.formErrors.push('Fill the Phone Number fild!');
    }
    if (!this.thisOrder.homeAddress) {
      this.formErrors.push('Fill the Home Address fild!');
    }
    if (!this.thisOrder.paymentMethod) {
      this.formErrors.push('Fill the Payment Method fild!');
    }
    if (!this.thisOrder.deliveryMethod) {
      this.formErrors.push('Fill the Delivery Method fild!');
    }
    if (this.formErrors.length) {
      this.setCartErrors(this.formErrors);
      console.log(this.getCartErrors); // eslint-disable-next-line
      this.enableCartErrors = !this.enableCartErrors;
    } else { // eslint-disable-next-line
      this.enableOrderConfirm = !this.enableOrderConfirm;
    }
    // this.addOrder(this.thisOrder);
    this.pushOrder(this.thisOrder);
    console.log(this.getOrderInfo);
    return this.enableOrderConfirm;
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

.cart-declair-name{
  width: 100%;
  height: 100px;
  font-size: 3em;
  @include mq('phone-wide'){
    font-size: 2.2em;
  }}
.cart-content{
  width: 100%;
  height: 500px;
  margin: 20px 0;
  @include mq('tablet'){
    margin: 15px 0;
  }
  @include mq('phone-wide'){
    @include flexbox();
    flex-direction: column;
    margin: 10px 0;
    height: min-content;
  }
  .cart-form{
    width: 50%;
    height: 100%;
    @include mq('phone-wide'){
    width: 100%;}
    form{
      padding: 30px 0;
    }}
  .cart-product{
    width: 50%;
    height: 100%;
    // overflow-y: scroll;
    overflow-x: hidden;
    @include mq('phone-wide'){
    width: 100%;
    overflow-x: initial;}
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
  padding: 3% 17%;
  @include mq('phone-wide'){
    padding: 5% 10%;}
  }
</style>
