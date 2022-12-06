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
	<Title title="panel.title" />

	<PanelPageItem>
		<template #topbar>
			<Topbar />
		</template>

		<template #content>
			<PanelTitle msg="panel.page_title" text="panel.page_message" />
			<pre><code>{{ auth.user }}</code></pre>
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
	border: 1px solid var(--color-bg);
	border-radius: 10px;
}
</style>
