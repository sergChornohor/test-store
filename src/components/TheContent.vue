<template lang="pug">
.content-container.flex.justify-center
  table.table-grid
    tbody
      tr(v-for='title in CategoriesList'
      :key='title';)
        td
          CategoryCard
        td
          CategoryCard
        td
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CategoryCard from '@/components/Products/CategoryCard.vue';
import ProductsStore from 'src/store/index';

@Options({
  components: {
    CategoryCard,
  },
})

export default class TheContent extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style.scss';

table{
  width: 100%;
  height: 80vh;
  margin-top: 30px;
  border: olive 2px;
  background-color: #123; }
  tbody{
    }
    tr{
      width: 60px;
      height: 60px;
      }
      td {
        width: 60px;
        height: 60px;
        border: 2px solid red;
        background-color: rgb(109, 60, 60); }
</style>
