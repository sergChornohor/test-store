<template lang="pug">
.breadcrumbs.flex
  ul
    li(v-for='(breadcrumb, idx) in breadcrumbList'
    :key='idx'
    @click='routeTo(idx)'
    :class="{'linked': !!breadcrumb.link}") {{ breadcrumb.to }}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { HeaderLinks, breadCrumbsListInterface } from '../types';
// import { injectStrict } from '../utils/injections';

export default class BreadCrumbs extends Vue {
  private breadcrumbList: any = ''

  mounted() {
    this.updateList();
  }

  @Watch('$route')
  onRouteChange(newValue:any) {
    this.updateList();
  }

  // set updateList($route: any) {
  //   this.breadcrumbList = this.$route.meta.breadCrumbs;
  // }

  updateList(): any {
    this.breadcrumbList = this.$route.meta.breadCrumbs;
  }

  routeTo(breadcrumbList: any, pRouteTo:any): void{
    if (this.breadcrumbList[pRouteTo].link) this.$router.push(breadcrumbList[pRouteTo].link);
    console.log(breadcrumbList[pRouteTo].link);
  }
}
</script>

<style scoped lang="scss">

@import "../assets/style.scss";
.breadcrumbs{
  width: 100%;
  height: 20px; }
  li{}
</style>
