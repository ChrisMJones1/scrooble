<template>
    <div class="scoreboard wood-grain">
        <div>Player 1 Score: {{player1Score}}</div>
        <div>Player 2 Score: {{player2Score}}</div>
        <div>Current Turn: Player {{playerTurn}}</div>
    </div>
</template>

<script>
    export default {
        name: "ScoreBoard",
        props: ["player1Score", "player2Score", "playerTurn"]
    }
</script>

<style scoped>
    .scoreboard {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>