<script setup>
import { onMounted } from 'vue'
import PanelSidebar from '@/components/panel/PanelSidebar.vue'
import { useAuthStore } from '@/stores/auth.js'
const auth = useAuthStore()

onMounted(() => {
	// Hide panel sidebar
	auth.visibleSidebar = false
})
</script>

<template>
	<PanelSidebar v-if="auth.visibleSidebar" />

	<div id="app-topbar">
		<slot name="topbar"></slot>
	</div>

	<div id="app-content">
		<slot name="content"></slot>
	</div>

	<slot></slot>
</template>
