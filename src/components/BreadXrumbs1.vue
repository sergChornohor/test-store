<template>
  <div>
    {{ crumbs }} // printing raw json
    <br><br>
    <div class="container">
       <b-breadcrumb :items="crumbs"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { HeaderLinks, breadCrumbsListInterface } from '../types';

export default class BreadCrumbs extends Vue {

  crumbs() {
    let pathArray = this.$route.path.split("/")
    pathArray.shift()
    let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
    breadcrumbArray.push({
        path: path,
        to: breadcrumbArray[idx - 1]
        ? "/" + breadcrumbArray[idx - 1].path + "/" + path
        : "/" + path,
        text: this.$route.matched[idx].meta.breadCrumb || path,
    });
    return breadcrumbArray;
    }, [])
  return breadcrumbs;
}

};
</script>
<style scoped>
.container{
  margin: auto;
  width: 50%
}
</style>