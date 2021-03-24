<template lang="pug">
table.table-grid
  ul.flex
    li.flex(
      v-for='(item, index) in Productstore',
      :key='index')
      CategoryCard(
        :img='item.img'
        :title='item.title')
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import CategoryCard from '@/components/Products/CategoryCard.vue';
import Store from '@/store/index';
import { ProductCategories } from '@/types';

@Options({
  components: {
    CategoryCard,
  },
})

export default class Category extends Vue {
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
  margin: 30px;
  border: olive 2px;
  overflow-y: hidden;
  background-color: linear-gradient(#deeef5, #f4f5cd); }
  ul{
    width: 100%;
    flex-wrap: wrap;
    }
    li{
      height: 200px;
      width: 200px;
      border: 2px solid red;
      margin: 15px;
      background-color: rgb(109, 60, 60); }
</style>
