<template>
    <div v-if="this.playerTurn === this.player">
        <div v-bind:class="`tileRack${this.player}`">
            <Tile :interactive="true" :tileSelected="tileSelected" v-for="(tile, index) in tiles" :key="`player1tile-${index}`" :id="`tileRack-${tile.id}`" @selectTile="selectTile" v-on:chooseTile="selectTile" v-bind:tile="tile" v-bind:index="index" />
        </div>
        <div id="currentlySelectedTile" v-bind:class="`lastPlayed${this.player}`" v-if="lastTiles.length > 0 && this.$root.$data.currentLetter !== null"><Tile :interactive="false" v-bind:tile="lastTiles[0]" /></div>
<!--        <button v-on:mousedown="cancelTilePlacement">Undo tile</button>-->
    </div>
</template>

<script>
    import Tile from "@/components/Tile";
    export default {
        name: "TileRack",
        components: {Tile},
        props:["tiles", "tileSelected", 'lastTiles', 'player', 'playerTurn'],
        data: function() {
          return {

          }
        },
        methods: {
            cancelTilePlacement: function () {
                if(this.lastTiles.length > 0) {
                    let returnedTile = this.lastTiles.shift();
                    document.getElementById(`tileRack-${returnedTile.id}`).classList.remove('hidden');
                    this.$emit("tileChosen", false);

                }

            },
            selectTile: function (newTile) {

                this.lastTiles.unshift(newTile);
                console.log(this.lastTilesPlayer1);
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