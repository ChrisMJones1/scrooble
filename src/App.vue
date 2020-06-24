<template>
  <div id="app">
    <Board :tiles="this.$root.$data.tiles" />

    <button v-on:mousedown="this.$root.grabRandomTile">New Tile</button>
  </div>
</template>

<script>
import Board from "@/components/Board";

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
