<template lang="pug">
.header-container.flex.space-between.align-center
  menu.flex
    li.flex.align-center(
      v-for='link in links',
      :key='link.url')
      router-link.ani-transition(
        @click='resetCategFlag'
        :to='link.url',
        :exact='link.exact',
        active-class='active') {{link.title}}
  .cart-form.flex.justify-end.ani-transition(@click='$router.push({ name: "Cart"})')
    .index {{ getCartIndex }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Getter, Mutation } from 'vuex-class';
import { HeaderLinks, breadCrumbsListInterface } from '@/types';
import BreadCrumbs from './Breadcrumbs.vue';

 @Options({
   components: {
     BreadCrumbs,
   },
 })

export default class TheHeader extends Vue {
  @Getter getCartIndex!: number;

  @Mutation resetCategFlag: any;

  private links: Array<HeaderLinks> = [
    { title: 'Home', url: '/', exact: true },
    { title: 'Category', url: '/category', exact: false },
    { title: 'AllProducts', url: '/products', exact: false },
    { title: 'About', url: '/about', exact: false },
  ];
}
</script>

<style scoped lang="scss">
@import "../assets/style.scss";
a{
  text-decoration: none;}
.header-container{
  width: 100%;
  height: 70px;
  background-color: $blue-color; }
  menu{
    width: 500px;
    height: 50px;
    list-style-type: none;}
    li {
      position: relative;
      width: 100%;
      height: 100%; }
      a {
        width: 100%;
        text-align: center;
        font-size: 17px;
        color: $yellow-color;
        @include mq('phone-wide'){
          font-size: 14px;
      }}
      a:hover, a:active{
        color: $white-color; }
  .cart-form{
    width: 40px;
    height: 40px;
    background-image: url('../assets/img/Buy-icon-yellow.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 40px;
    @include mq('phone-wide'){
      margin-right: 10px;}}
    .index{
      width: 13px;
      height: 13px;
      text-align: center;
      font-size: 17px;
      color: $cart-btn-red;
      @include mq('phone-wide'){
      width: 10px;
      height: 10px;
      font-size: 13px;}}
  .cart-form:hover{
    width: 40px;
    height: 40px;
    background-image: url('../assets/img/Buy-icon-red.png');
    background-size: contain;
    margin-right: 40px; }
    .cart-form:hover .index{
      color: $yellow-color;}
</style>
