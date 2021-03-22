<template lang="pug">
.header-container.flex.space-between
  menu.flex
    li.flex.align-center(
      v-for='link in links',
      :key='link.url')
      router-link(
        :to='link.url',
        :exact='link.exact',
        active-class='active') {{link.title}}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { HeaderLinks } from '../types';

export default class TheHeader extends Vue {
  links: Array<HeaderLinks> = [
    { title: 'Home', url: '/', exact: true },
    { title: 'Category', url: '/category', exact: false },
    { title: 'Products', url: '/products', exact: false },
    { title: 'About', url: '/about', exact: false },
    { title: 'Cart', url: '/cart', exact: false },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../assets/style.scss";
a{
  text-decoration: none;
}
.header-container{
  width: 100%;
  height: 50px;
  background-color: $blue-color; }
  menu{
    width: 600px;
    list-style-type: none; }
    li {
      position: relative;
      width: 100%;
      height: 100%; }
      a {
        width: 100%;
        text-align: center;
        font-size: 17px;
        color: $yellow-color; }
      a:hover, a:active{
        color: $white-color; }
</style>
