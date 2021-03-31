<template lang="pug">
.container
  ul.flex(@click='getProducts')
      li.flex(
        v-for='(item, index) in getCatList',
        :key='index')
        ProductCard
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Action, Getter } from 'vuex-class';
import ProductCard from '@/components/Products/ProductCard.vue';
import Store from '@/store/index';
import { ProductCategories } from '@/types';
import axios from '../service/api';
// import StoreService from '../service/storeApi';

@Options({
  components: {
    ProductCard,
  },
})

export default class Products extends Vue {
  @Getter getCatList!: ProductCategories[];

  // mounted() {
  //   this.StoreService.getProductsApi;
  // }
  async beforeMount() {
    try {
      const response = await this.axios.get('/assets/products/products.json');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
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
      border-radius: 10px;
      margin: 15px;}
</style>
