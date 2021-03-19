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
    { title: 'Tasks', url: '/', exact: true },
    { title: 'Kanban', url: '/kanban', exact: false },
    { title: 'Activity', url: '/activity', exact: false },
    { title: 'Calendar', url: '/calendar', exact: false },
    { title: 'Files', url: '/files', exact: false },
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
  height: 30px;
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
        color: $head-white-color; }
</style>
