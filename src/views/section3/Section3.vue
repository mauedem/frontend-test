<template>
    <div class="section3">
        <Sidemenu />

        <div class="submenu">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidemenu from "@/components/Sidemenu";

export default {
    name: "Section3",

    components: {
        Sidemenu
    }
}
</script>

<style>
.section3 {
    height: 100%;
    width: 100%;
    display: flex;
}

.submenu {
    width: 100%;
}

.submenu__header {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
</style>
