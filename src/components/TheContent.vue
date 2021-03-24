<template lang="pug">
.content-container.flex.justify-center.bggradient
  router-view
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Category from '../views/Category.vue';

@Options({
  components: {
    Category,
  },
})

export default class TheContent extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';
</style>
