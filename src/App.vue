<template>
    <div>
        <hello-world></hello-world>
        <p class="message">{{message}}</p>
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
.message {
    text-align: center;
}
</style>
