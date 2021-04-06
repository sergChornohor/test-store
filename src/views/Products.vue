<template lang="pug">
.container
  ul.flex
      li.flex(
        v-for='(item, index) in currentCategory($route.params.title)',
        :key='index')
        ProductCard(
          :pr = 'item.id')
  NoProduct(v-if='getEnableNoProduct'
    @window-close='chanheEnableNoProduct')
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Action, Getter, Mutation } from 'vuex-class';
import ProductCard from '@/components/Products/ProductCard.vue';
import NoProduct from '@/components/Modal/NoProduct.vue';
import { ProductsInterface } from '@/types';

@Options({
  components: {
    ProductCard,
    NoProduct,
  },
})

export default class Products extends Vue {
  @Getter getProducts!: ProductsInterface[];

  @Getter getEnableNoProduct!: boolean;

  @Mutation chanheEnableNoProduct:any;

  @Mutation addProductFromAPI:any;

  async beforeMount() {
    try {
      const baseRoute = '/products';

      await this.axios({ url: baseRoute, headers: { 'content-type': 'application/json', Accept: 'application/json' } })
        .then((response) => {
          this.addProductFromAPI(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  currentCategory(categ:string) {
    let result: any[] = [];
    if (categ !== undefined) {
      this.getProducts.forEach((p) => {
        if (p.category === categ) (result.push(p));
      });
    } else (result = this.getProducts);
    return result;
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
    flex-wrap: wrap;
    @include mq('tablet'){
      @include justify-content(center);
    }
    @include mq('phone-wide'){
      @include justify-content(center);
    }
    li{
      height: 300px;
      width: 300px;
      border-radius: 10px;
      margin: 15px;
      @include mq('tablet'){
        width: 240px;
        height: 240px;
        margin: 10px;
      }}
  }
</style>
