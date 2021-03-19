<template lang='pug'>
.wrapper.flex.justify-center.flex-column
  TheHeader
  TheContent
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheHeader from '@/components/TheHeader.vue';
import TheContent from '@/components/TheContent.vue';

@Options({
  components: {
    TheHeader,
    TheContent,
  },
})
export default class Home extends Vue {}
</script>
