<template>
	<div>
		<hello-world></hello-world>
		<p class="message">{{message}}</p>
		<GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" :onCurrentUser="onCurrentUser">Login</GoogleLogin>
	</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import HelloWorld from 'components/HelloWorld.vue';
const CLIENT_ID = "672275288589-gdg4j010jalhp5n6gh45333dhuq69liv.apps.googleusercontent.com";
export default {
	name: 'App',
	data() {
		return {
			message: "We gucci",
			params: {
				client_id: CLIENT_ID
			}
		}
	},
	components: {
		HelloWorld,
		GoogleLogin
	},
	methods: {
		onCurrentUser(googleUser) {
			console.log('onCurrentUser', googleUser);
		},
		onSuccess(googleUser) {
			console.log('googleUser', googleUser);
		},
		onFailure(err) {
			console.log(err)
		},
	}
}
</script>

<style>
.message {
	text-align: center;
}
</style>
