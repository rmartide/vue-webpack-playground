<template>
    <div>
        <hello-world></hello-world>
        <p class="message">{{message}}</p>
    </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';
export default {
    name: 'App',
    data() {
        return {
            message: "We gucci"
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
