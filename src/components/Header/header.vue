<template>
    <header>
        <!-- <div class="header-top-line"></div> -->
        <div class="header-line">
            <md-button @click="toggleSidebar()" class="menu-button md-icon-button md-primary">
                <md-icon>menu</md-icon>
            </md-button>
            <!-- <h1>TOP-киношка</h1> -->
            <img src="../../assets/img/logo.png" alt="Logo">
        </div>
        <!-- <sidebar /> -->
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
