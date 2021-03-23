<template lang="pug">
.header-container.space-between.flex-column
  menu.flex
    li.flex.align-center(
      v-for='link in links',
      :key='link.url')
      router-link(
        :to='link.url',
        :exact='link.exact',
        active-class='active') {{link.title}}
  BreadCrumbs
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { HeaderLinks, breadCrumbsListInterface } from '../types';
import BreadCrumbs from './Breadcrumbs.vue';
// import { injectStrict } from '../utils/injections';
 @Options({
   components: {
     BreadCrumbs,
   },
 })

export default class TheHeader extends Vue {
  private links: Array<HeaderLinks> = [
    { title: 'Home', url: '/', exact: true },
    { title: 'Category', url: '/category', exact: false },
    { title: 'Products', url: '/products', exact: false },
    { title: 'About', url: '/about', exact: false },
    { title: 'Cart', url: '/cart', exact: false },
  ]
}
</script>

<style scoped lang="scss">
@import "../assets/style.scss";
a{
  text-decoration: none;
}
.header-container{
  width: 100%;
  height: 70px;
  background-color: $blue-color; }
  menu{
    width: 600px;
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
        color: $yellow-color; }
      a:hover, a:active{
        color: $white-color; }
</style>
