<template lang='pug'>
.wrapper.flex.flex-column
  TheHeader(
    :index ='cartIndex'
  )
  TheContent(
    @add-to-cart='changeCartIndex()'
  )
  TheBottom
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Component } from 'vue-property-decorator';
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
export default class Home extends Vue {
  cartIndex = 0;

  changeCartIndex() {
    this.cartIndex += 1;
    alert('Yeeeeeeeeeeeeeeeeeeeeea');
  }
}
</script>
