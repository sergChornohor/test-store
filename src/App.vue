<template lang='pug'>
div#app
  Home
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from './Layout/Home.vue';

@Options({
  components: {
    Home,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

@import "./assets/reset.css";
@import "./assets/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
