<template>
    <div>
        <div class="header-top-line"></div>
        <div class="header-line">
            <div @click="toggleSidebar()" class="sidebar-toggle" :class="{ open: toggleActive }" id="nav-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>TOP-киношка</h1>
        </div>
        <Sidebar/>
        <Dialog />
        <div class="header-bootom-line">
            <div class="wrapper">
                <input type="text" v-model="search" v-on:change="searchMovie()" placeholder="Поиск...   ">
            </div>
        </div>
    </div>
</template>

<script src="./Header.js">
</script>

<style lang="scss" src="./Header.scss">
</style>
