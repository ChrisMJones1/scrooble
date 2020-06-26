<template>
    <div v-if="this.playerTurn === this.player">
        <div v-bind:class="`tileRack${this.player} minTileRack`">
            <Tile :interactive="true" :tileSelected="tileSelected" v-for="(tile, index) in tiles" :key="`player1tile-${index}`" :id="`tileRack-${tile.id}`" @selectTile="selectTile" v-on:chooseTile="selectTile" v-bind:tile="tile" v-bind:index="index" />
        </div>
        <div v-on:mousedown="cancelTilePlacement" id="currentlySelectedTile" v-bind:class="`lastPlayed${this.player}`" v-if="shownTile.length > 0 && this.$root.$data.currentLetter !== null"><Tile :interactive="false" v-bind:tile="this.shownTile[0]" /></div>
<!--        <button v-on:mousedown="cancelTilePlacement">Undo tile</button>-->
    </div>
</template>

<script>
    import Tile from "@/components/Tile";
    export default {
        name: "TileRack",
        components: {Tile},
        props:["tiles", "tileSelected", 'lastTiles', 'player', 'playerTurn', 'shownTile'],
        data: function() {
          return {

          }
        },
        methods: {
            cancelTilePlacement: function () {
                if(this.shownTile.length > 0) {
                    let returnedTile = this.shownTile.shift();
                    document.getElementById(`tileRack-${returnedTile.id}`).classList.remove('hidden');
                    this.$emit("tileChosen", false);

                }

            },
            selectTile: function (newTile) {

                this.shownTile[0] = (newTile);
            }
        }
    }
</script>

<style scoped>
.tileRack1 {
    width: 42vmin;
    height: 6vmin;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    position: absolute;
    right: 1vmin;
    top: 10vmin;
    grid-gap: 5px;
    /*height: 200px;*/
}
.minTileRack {
    min-width: 300px;
    min-height: 40px;
}

.tileRack2 {
    width: 42vmin;
    height: 6vmin;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    position: absolute;
    right: 1vmin;
    top: 30vmin;
    grid-gap: 5px;
    /*height: 200px;*/
}

.lastPlayed1 {
    width: 42vmin;
    height: 6vmin;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    position: absolute;
    right: 1vmin;
    top: 20vmin;
    grid-gap: 5px;
    /*height: 200px;*/
}

.lastPlayed2 {
    width: 42vmin;
    height: 6vmin;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    position: absolute;
    right: 1vmin;
    top: 40vmin;
    grid-gap: 5px;
    /*height: 200px;*/
}

    .hidden {
        display: none;
    }

</style>