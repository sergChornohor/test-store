<template lang='pug'>
.wrapper.flex.justify-center.flex-column
  TheHeader
  TheContent
  TheBottom
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheHeader from '@/components/TheHeader.vue';
import TheContent from '@/components/TheContent.vue';
import TheBottom from '@/components/TheBottom.vue';

@Options({
  components: {
    TheHeader,
    TheContent,
    TheBottom,
  },
})
export default class Home extends Vue {}
</script>
