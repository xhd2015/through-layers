<template>
<div>
    <nav>
    <router-link to="/appIndex">App </router-link>
    <router-link to="/editorIndex">Editor </router-link>
</nav>
<router-view></router-view>
    </div>


</template>

<script>
const router = require('./router').default

export default {
    router
}
</script>