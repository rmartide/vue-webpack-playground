<template>
    <h1 class="header">{{message}}</h1>
</template>

<script>
export default {
    name:'HelloWorld',
    data() {
        return {
            message: "I'm HelloWorld"
        }
    }
}
</script>

<style lang="scss">
    $header-color: rgb(39, 40, 87);

    .header {
        color: $header-color;
        text-align: center;
    }
</style>
