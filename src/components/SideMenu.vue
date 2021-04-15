<template lang="pug">
.side-container.justify-start
  menu.flex.flex-column
    li(
      v-for='category in getCatList',
      :key='category.title')
      router-link.ani-transition(
        :to="'/products/' + category.title",
        :exact='category.exact',
        active-class='active') {{category.title}}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Getter } from 'vuex-class';

export default class SideMenu extends Vue {
  @Getter getCatList!: any;
}
</script>

<style scoped lang="scss">
@import "../assets/style.scss";

a{
  text-decoration: none;}
.side-container{
  width: 15%;
  height: 100%;
  // background-color: $blue-color;
  @include mq('phone-wide'){
    width: 20%;
  }}
  menu{
    list-style-type: none;
    padding-top: 20px;}
    li {
      position: relative;
      text-align: left;
      width: 100%;
      height: 100%;
      padding: 5px 10px;}
      a {
        width: 100%;
        font-size: 17px;
        color: $yellow-color;
        @include mq('phone-wide'){
          font-size: 14px;
      }}
      a:hover, a:active{
        color: black; }
</style>
