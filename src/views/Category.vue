<template lang="pug">
table.table-grid
  ul.flex
    li.flex(
      v-for='(item, index) in maineCategory(getCategFlag)',
      :key='index')
      CategoryCard(
        :img='item.img'
        :title='item.title'
        @click='$router.push({ name: "Products", params: { title: item.title }})')
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

  @Getter getCategFlag!: string;

  maineCategory(cat:string) {
    let result: any[] = [];
    if (cat === 'gadgets' || cat === 'goods') {
      this.getCatList.forEach((c) => {
        if (c.cat === cat) (result.push(c));
      });
    } else (result = this.getCatList);
    return (result);
  }

  // maineCategory(cat:string) {
  //   let result: any[] = [];
  //   if (cat === 'gadgets' || cat === 'goods') {
  //     return this.getCatList.forEach((c) => {
  //       if (c.cat === cat) (result.push(c));
  //     });
  //   }
  //   (result = this.getCatList);
  //   return (result);
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
