<template lang="pug">
.breadcrumbs.flex
  ul
    li(v-for='(breadcrumb, idx) in breadcrumbList'
    :key='idx'
    @click='routeTo(idx)'
    :class="{'linked': !!breadcrumb.link}") {{ breadcrumb.name }}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { HeaderLinks, breadCrumbsListInterface } from '../types';
// import { injectStrict } from '../utils/injections';

export default class BreadCrumbs extends Vue {
  private breadcrumbList: unknown = ''

  mounted() {
    this.updateList();
  }

  @Watch('$route')
  onRouteChange(newValue:any) {
    this.updateList();
  }

  // public updateList(): void {
  //   this.breadcrumbList = this.$route.meta.breadCrumbs;
  // }

  updateList(): any {
    this.breadcrumbList = this.$route.meta.breadCrumbs;
  }

  routeTo(breadcrumbList: any, pRouteTo:any): void{
    if (breadcrumbList[pRouteTo].link) this.$router.push(breadcrumbList[pRouteTo].link);
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
