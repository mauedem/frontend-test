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

<style scoped>
.section3 {
    height: 100%;
    width: 100%;
    display: flex;
}

.submenu {
    /*margin-left: 300px;*/
    width: 100%;
}
</style>
