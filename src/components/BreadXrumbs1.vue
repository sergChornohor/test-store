<template>
  <div>
    {{ crumbs() }}
    <br><br>
    <div class="container">
       <b-breadcrumb :items="crumbs()"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { HeaderLinks, breadCrumbsListInterface } from '../types';

export default class BreadXrumbs1 extends Vue {
  crumbs() {
    const pathArray = this.$route.path.split('/');
    pathArray.shift();
    const breadcrumbs = pathArray.reduce((breadcrumbArray: any, path: any, idx: any) => {
      breadcrumbArray.push({
        path,
        to: breadcrumbArray[idx - 1]
          ? `/${breadcrumbArray[idx - 1].path}/${path}`
          : `/${path}`,
        text: this.$route.matched[idx].meta.breadCrumb || path,
      });
      console.log(breadcrumbArray);
      return breadcrumbArray;
    }, []);
    console.log(breadcrumbs);
    return breadcrumbs;
  }
}
</script>
<style scoped>
.container{
  margin: auto;
  width: 50%
}
</style>
