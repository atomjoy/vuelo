<script setup>
import '@/assets/panel.css'
import PanelTitle from '@/components/panel/PanelTitle.vue'
import PanelPageItem from '@/components/panel/PanelPageItem.vue'
import Title from '@/components/PageTitle.vue'
import Topbar from '@/components/panel/Topbar.vue'
import { useAuthStore } from '@/stores/auth.js'
const auth = useAuthStore()
</script>

<template>
	<Title title="settings.title" />

	<PanelPageItem>
		<template #topbar>
			<Topbar />
		</template>

		<template #content>
			<PanelTitle msg="settings.page_title" text="settings.page_message" />
		</template>
	</PanelPageItem>
</template>

<style scoped>
p {
	float: left;
	width: 100%;
	overflow: hidden;
}

pre {
	float: left;
	width: 100%;
	overflow: hidden;
	margin: 30px 0px;
	padding: 20px;
	color: var(--color);
	border-radius: 10px;
	border: 1px solid #eee;
}
</style>
