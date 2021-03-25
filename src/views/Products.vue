<template lang="pug">
.container
  ul.flex
      li.flex(
        v-for='(item, index) in Productstore',
        :key='index')
        ProductCard
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductCard from '@/components/Products/ProductCard.vue';
import Store from '@/store/index';
import { ProductCategories } from '@/types';

@Options({
  components: {
    ProductCard,
  },
})

export default class Products extends Vue {
  Productstore: Array<ProductCategories> = [];

  mounted() {
    this.Productstore = Store.state.Categorieslist;
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
    flex-wrap: wrap;}
    li{
      height: 300px;
      width: 300px;
      border: 2px solid red;
      margin: 15px;}
</style>
