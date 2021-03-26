<template lang='pug'>
.wrapper.flex.flex-column
  TheHeader
  TheContent
  TheBottom
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Component, Prop } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheContent from '@/components/TheContent.vue';
import TheBottom from '@/components/TheBottom.vue';
import ProductCard from '@/components/Products/ProductCard.vue';
import mitt from 'mitt';

@Options({
  components: {
    TheHeader,
    TheContent,
    TheBottom,
  },
})
export default class Home extends Vue {
}
</script>
