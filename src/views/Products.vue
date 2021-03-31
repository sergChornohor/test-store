<template lang="pug">
.container
  ul.flex
      li.flex(
        v-for='(item, index) in getProducts',
        :key='index')
        ProductCard(
          :name = 'item.name'
          :price = 'item.price'
          :image = 'item.image'
          :pr = 'index')
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Action, Getter, Mutation } from 'vuex-class';
import ProductCard from '@/components/Products/ProductCard.vue';
import { Prop } from 'vue-property-decorator';
import { ProductCategories, ProductsInterface } from '@/types';

// import StoreService from '../service/storeApi';

@Options({
  components: {
    ProductCard,
  },
})

export default class Products extends Vue {
  // @Prop() ProductsList: ProductsInterface[] = [];

  @Getter getCatList!: ProductCategories[];

  @Getter getProducts!: ProductsInterface[];

  @Mutation addProductFromAPI:any;

  async beforeMount() {
    try {
      await this.axios({ url: '/products', headers: { 'content-type': 'application/json', Accept: 'application/json' } })
        .then((response) => {
          // this.ProductsList = response.data;
          this.addProductFromAPI(response.data);
        });
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
