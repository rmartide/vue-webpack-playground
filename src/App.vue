<template>
    <div>
        <hello-world></hello-world>
        <p>{{message}}</p>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
    name: 'App',
    data() {
        return {
            message: "I'm App yap"
        }
    },
    components: {
        HelloWorld
    }
}
</script>

<style>
</style>
