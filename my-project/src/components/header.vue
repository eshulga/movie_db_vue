<template>
    <header>
        <div class="header-top-line"></div>
        <div class="header-line">
            <h1>TOP-киношка</h1>
        </div>
    </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">

    @import '../scss/variables.scss';

    .header {

        &-top-line {
            min-height: 25px;
            background-color: $color-primary-dark;
        }

        &-line {
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
</style>
