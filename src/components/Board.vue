<template>
    <div class="board">
        <Square v-for="(tile, index) in tiles" :key="`tile-${index}`" v-bind:letter="tile" v-bind:index="index"  />
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
<!--        <Square />-->
    </div>
</template>

<script>
    import Square from "@/components/Square";
    export default {
        name: "Board",
        components: {Square},
        data() {
            return {
                tiles: ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],
            }
        }
    }
</script>

<style scoped>
    .board {
        width: 95vmin;
        height: 95vmin;
        min-height: 500px;
        min-width: 500px;
        background: tan;
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: repeat(15, 1fr);
    }
</style>