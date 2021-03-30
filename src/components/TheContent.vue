<template lang="pug">
.content-container.flex.bggradient.flex-column
  BreadCrumbs
  router-view
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BreadCrumbs from './Breadcrumbs.vue';
import BreadXrumbs1 from './BreadXrumbs1.vue';

@Options({
  components: {
    BreadCrumbs,
    BreadXrumbs1,
  },
})

export default class TheContent extends Vue {
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';
</style>
