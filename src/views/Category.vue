<template lang="pug">
table.table-grid
  ul.flex
    li.flex(
      v-for='(items, index) in Productstore',
      :key='index')
      CategoryCard(
        :img='item.img'
        :title='item.title')
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
  Productstore: Array<ProductCategories> = [];

  mounted() {
    this.Productstore = ProductsStore.state.Categorieslist;
    console.log(this.Productstore);
  }
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
  ul{
    width: 100%;
    }
    li{
      height: 200px;
      width: 200px;
      border: 2px solid red;
      margin: auto;
      background-color: rgb(109, 60, 60); }
</style>
