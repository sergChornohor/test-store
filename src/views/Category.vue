<template lang="pug">
table.table-grid
  ul.flex
    li.flex(
      v-for='(item, index) in getCatList',
      :key='index')
      CategoryCard(
        :img='item.img'
        :title='item.title'
        @click='$router.push({ name: "Products"})')
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Action, Getter } from 'vuex-class';
import CategoryCard from '@/components/Products/CategoryCard.vue';
import { ProductCategories } from '@/types';

@Options({
  components: {
    CategoryCard,
  },
})

export default class Category extends Vue {
  @Getter getCatList!: ProductCategories[];

  @Getter getCatListGadgets!: ProductCategories[];

  // goToCategoryProducts(cat:string) {
  //   return (this.$router.push({ name: "Products"}) && )
  // }
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';
table{
  width: 100%;
  height: 80vh;
  border: olive 2px;
  overflow-y: hidden;
  background-color: linear-gradient(#deeef5, #f4f5cd); }
  ul{
    width: 100%;
    flex-wrap: wrap;
    @include mq('tablet'){
      @include justify-content(center);
    }
    @include mq('phone-wide'){
      @include justify-content(center);
    }}
    li{
      height: 200px;
      width: 200px;
      margin: 15px;
      border-radius: 8px;
      background-color: $blue-color1;}
</style>
