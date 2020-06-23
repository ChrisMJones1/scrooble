<template >
    <div v-if="index === 1" v-bind:style="{'background': 'aquamarine'}">{{letter}}</div>
    <div v-else v-bind:style="{'background': 'pink'}">{{letter}}</div>
</template>

<script>
    export default {
        name: "Square",
        props: ['letter', 'index']
    }
</script>

<style scoped>
    div {
        border: 1px solid black;

    }
</style>