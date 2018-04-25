<template>
    <header>
        <div class="header-top-line"></div>
        <div class="header-line">
            <div @click="toggleSidebar()" class="sidebar-toggle" :class="{ open: toggleActive }" id="nav-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1>TOP-киношка</h1>
        </div>
        <sidebar />
        <div class="header-bootom-line">
            <div class="wrapper">
                <input type="text" v-model="search" v-on:keyup="searchMovie()" placeholder="Поиск...   ">
            </div>
        </div>
    </header>
</template>

<script src="./Header.js">
</script>

<style lang="scss" src="./Header.scss">
</style>
