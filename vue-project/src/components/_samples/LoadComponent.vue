<script>
import { defineAsyncComponent } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

export default {
	name: 'LoadPageComponent',
	props: {
		name: { type: String, required: true },
	},
	components: {
		TopMenu,
	},
	data() {
		return {
			auth: useAuthStore(),
		}
	},
	computed: {
		load() {
			return defineAsyncComponent(() => import(this.name))
		},
	},
}
</script>

<template>
	<div :class="{ rightbar: true }">
		<div id="top-menu">Top menu goes here ...</div>

		<div id="wraper">
			<keep-alive>
				<component :is="load"></component>
			</keep-alive>
		</div>
	</div>
</template>

<style scoped>
/* @import() css style here */
</style>
