<template lang="pug">
.breadcrumbs.flex
  ul
    li(v-for='(breadcrumb, idx) in breadcrumbList'
    :key='idx'
    @click='routeTo(idx)'
    :class="{'linked': !!breadcrumb.to}") {{ breadcrumb.to }}
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { HeaderLinks, breadCrumbsListInterface } from '../types';

export default class BreadCrumbs extends Vue {
  breadcrumbList: any = [];

  mounted() {
    this.updateList();
  }

  @Watch('$route')
  onRouteChange(newValue:any) {
    this.updateList();
  }

  updateList(): any {
    this.breadcrumbList = this.$route.meta.breadCrumbs;
  }

  routeTo(index:number): void{
    if (this.breadcrumbList[index].to) this.$router.push(this.breadcrumbList[index].to);
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
