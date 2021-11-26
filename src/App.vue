<template>
    <div id="app">
        <Navigation />

        <router-view />
    </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
    name: 'App',

    components: {
        Navigation
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

*, ::after, ::before {
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', sans-serif;
    height: 100vh;
    overflow: hidden;
}

.btn {
    padding: 10px 20px;
    border: 1px solid transparent;
    cursor: pointer;
}

.title {
    font-weight: 600;
}
</style>
