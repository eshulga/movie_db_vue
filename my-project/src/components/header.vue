<template>
    <header>
        <h1>my Header</h1>
    </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss" scoped>
    header {
        box-sizing: content-box;
        background-color: aliceblue;

        h1 {
            font-size: 25px;
            color: red;
        }
    }
</style>
