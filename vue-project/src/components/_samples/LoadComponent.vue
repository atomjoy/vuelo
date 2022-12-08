<script>
import { defineAsyncComponent } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import TopMenu from '@/components/pages/PageMenu.vue'

export default {
	name: 'LoadComponent',
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
		getComponent() {
			return defineAsyncComponent(() => import(this.name))
		},
	},
}
</script>

<template>
	<div :class="{ rightbar: true, showrightbar: auth.visibleSidebar }">
		<TopMenu />

		<div id="wraper">
			<keep-alive>
				<component :is="getComponent"></component>
			</keep-alive>
		</div>
	</div>
</template>

<style scoped>
/* @import() css style here */
</style>
