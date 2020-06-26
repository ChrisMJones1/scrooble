<template>
    <div class="board">
        <Square :id="`Square-${index}`" v-for="(tile, index) in tiles" :key="`tileBoard-${index}`" :tileSelected="tileSelected" v-bind:tile="tile" v-bind:index="index"  />

    </div>
</template>

<script>
    import Square from "@/components/Square";
    export default {
        name: "Board",
        components: {Square},
        props: ['tiles', 'tileSelected', 'tilePlaced']
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
        overflow: hidden;
        border: 0.25em solid black;
    }
</style>