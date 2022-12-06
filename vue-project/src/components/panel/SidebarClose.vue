<script setup>
import { useAuthStore } from '@/stores/auth.js'
const auth = useAuthStore()
</script>

<template>
	<i class="fas fa-times close-sidebar" @click="auth.showSidebar"></i>
</template>

<style scoped>
.close-sidebar {
	float: right;
	padding: 0px 10px;
	color: var(--color);
	cursor: pointer;
	transition: all 0.6s;
}
.close-sidebar:hover {
	color: var(--color-text);
	transform: rotate(180deg);
}
</style>
