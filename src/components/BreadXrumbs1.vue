// <template lang='pug'>
//   .m-artHeader
//     el-breadcrumb class="linkWay"
//       el-breadcrumb-item(v-for="(item,index) in breadList"
//       :key="item.id"  separator="/"
//       :to="{ path: item.path }") {{item.name}}
// </template>
<script lang='ts'>
// import { Vue } from 'vue-class-component';
// import { Watch } from 'vue-property-decorator';
// import Store from '@/store/index';

// export default class BreadXrumbs1 extends Vue {
//   created() {
//     this.getBreadcrumb();
//   }

//   breadList = []; // route collection

//   public getBreadcrumb(): void {
//     var breadNumber: any = typeof(this.$route.meta.breadNumber)!="undefined"?this.$route.meta.breadNumber:1;//The default is 1
//     var newBread = {name:this.$route.name,path:this.$route.fullPath};//current page
//     var breadList = Store.getters.breadListState;//Get the breadList array
//     breadList.splice(breadNumber,breadList.length - breadNumber, newBread);
//     var breadList: any = JSON.stringify(breadList);
//     Store.commit('breadListMutations',breadList);
//     this.breadList = Store.getters.breadListState;
//   };

//   @Watch('$route')
//     onRouteChange(e:any) {
//       this.getBreadcrumb();
//     }
// }
// </script>

// <style scoped lang="scss">

// @import "../assets/style.scss";
// .breadcrumbs{
//   height: 20px; }
// </style>
