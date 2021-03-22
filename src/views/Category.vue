<template lang="pug">
table.table-grid
  tbody
    th
      td
        ProductCard
      td
        ProductCard
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CategoryCard from '@/components/Products/CategoryCard.vue';
import ProductsStore from '@/store/index';
import { ProductCategories } from '@/types';

@Options({
  components: {
    CategoryCard,
  },
})

export default class Category extends Vue {
  // Productstore: Array<ProductCategories> = [];

  // mounted(): void {
  //   this.Productstore = ProductsStore.state.Categorieslist;
  // }
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';
table{
  width: 100%;
  height: 80vh;
  margin-top: 30px;
  border: olive 2px;
  background-color: linear-gradient(#deeef5, #eff3e1); }
  tbody{
    }
    th{
       }
      td{
        height: 200px;
        width: 200px;
        border: 2px solid red;
        margin: auto;
        background-color: rgb(109, 60, 60); }
</style>
