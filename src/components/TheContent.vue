<template lang="pug">
.content-container.flex.bggradient.flex-column
  BreadCrumbs
  .wrap-data.flex
    SideMenu(v-if='$route.path !== "/"')
    router-view
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BreadCrumbs from '@/components/Breadcrumbs.vue';
import SideMenu from '@/components/SideMenu.vue';

@Options({
  components: {
    BreadCrumbs,
    SideMenu,
  },
})

export default class TheContent extends Vue {
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';
.wrap-data{
  height: 100%;
  width: 100%;
}
</style>
