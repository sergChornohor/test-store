<template lang="pug">
.content-container.flex.bggradient.flex-column
  BreadCrumbs
  router-view
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BreadCrumbs from './Breadcrumbs.vue';

@Options({
  components: {
    BreadCrumbs,
  },
})

export default class TheContent extends Vue {
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';
</style>
