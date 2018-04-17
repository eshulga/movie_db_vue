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
    </header>
</template>

<script>

import Sidebar from './sidebar.vue'

export default {
  name: 'app-header',
  components: {
    sidebar: Sidebar
  },
  data: function () {
    return {
      toggleActive: false
    }
  },
  methods: {
    toggleSidebar () {
      this.toggleActive = !this.toggleActive
      this.$emit('toggleSidebar')
    }
  }
}
</script>

<style lang="scss">

    @import '../scss/variables.scss';

    .header {

        position: relative;
        z-index: 999;

        &-top-line {
            min-height: 25px;
            background-color: $color-primary-dark;
        }

        &-line {
            position: relative;
            z-index: 999;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80px;
            background-color: $color-primary-light;
        }

        h1 {
            font-size: 25px;
        }
    }

    #nav-icon {
        width: 40px;
        height: 30px;
        position: absolute;
        left: 30px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;

        span {
            display: block;
            position: absolute;
            height: 6px;
            width: 100%;
            background: $text-color-primary;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
        }
    }

    #nav-icon span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon span:nth-child(2) {
        top: 15px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon span:nth-child(3) {
        top: 30px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 3px;
        left: 8px;
    }

    #nav-icon.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }

    #nav-icon.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 32px;
        left: 8px;
    }
</style>
