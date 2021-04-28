// <template lang="pug">
//   .bread-container {{ crumns }}
//     b-breadcrumb :item='crumbs'
// </template>

// <script lang="ts">
// import { Vue } from 'vue-class-component';
// import { breadCrumbsListInterface } from '@/types';

// export default class BreadXrumbs extends Vue {
//   crumbs() {
//     let pathArray = this.$route.path.split("/");
//       pathArray.shift();
//let breadcrumbs = pathArray.reduce((breadcrumbArray:breadCrumbsListInterface[], path, idx) => {
//         breadcrumbArray.push({
//           path: path,
//           to: breadcrumbArray[idx - 1]
//             ? "/" + breadcrumbArray[idx - 1].path + "/" + path
//             : "/" + path,
//           text: this.$route.matched[idx].meta.breadCrumbs || path,
//         });
//         return breadcrumbArray;
//       }, [])
//       return breadcrumbs;
//   }
// }
// </script>