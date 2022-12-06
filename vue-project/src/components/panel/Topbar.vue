<script setup>
import ChangeLocale from '@/components/panel/ChangeLocale.vue'
import { useAuthStore } from '@/stores/auth.js'
import SidebarLogo from './SidebarLogo.vue'
import SidebarOpen from './SidebarOpen.vue'
import SidebarMessages from './SidebarMessages.vue'
const auth = useAuthStore()
</script>

<template>
	<div class="topbar">
		<SidebarLogo />

		<SidebarOpen />

		<SidebarMessages />

		<ChangeLocale />
	</div>
</template>

<style scoped>
.topbar {
	float: left;
	width: 100%;
	padding: 20px;
	border-bottom: 1px solid var(--color-bg);
}
</style>
