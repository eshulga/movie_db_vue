<template>
    <header>
        <div class="header-line">
            <md-button @click="toggleSidebar()" class="menu-button md-icon-button md-primary">
                <md-icon>menu</md-icon>
            </md-button>
            <img src="../../assets/img/logo.png" alt="Logo">
        </div>
        <div class="header-bootom-line search" v-bind:class="{hide: small}">
            <div class="search-wrapper">
                <input class="search__input" type="text" v-model="search" placeholder="Поиск..." debounce>
            </div>
        </div>
    </header>
</template>

<script src="./Header.js">
</script>

<style lang="scss" src="./Header.scss">
</style>
